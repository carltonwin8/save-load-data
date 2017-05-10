'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3001, host: 'localhost' });

function task(title, isDone) {
  return { title: title, isDone: isDone };
}

let tasks = [
  task("Wire the money to Panama!", true),
  task('Get hair dye, beard trimmer, dark glasses and "passport"', false),
  task("Book taxi to airport", false),
  task("Arrange for someone to look after the cat", false)
]

function taskNotDestroyed(tasks) {
  let t = [];
  for (let i=0; i < tasks.length; i++) {
    if (!tasks[i]._destroy) {
      t.push(tasks[i]);
    }
  }
  return t;
}
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(tasks);
    }
});

server.route({
    method: 'POST',
    path: '/saveform',
    handler: function (request, reply) {
        tasks = taskNotDestroyed(request.payload.tasks);
        reply.redirect(request.info.referrer);
    }
});

server.route({
    method: 'POST',
    path: '/save',
    handler: function (request, reply) {
        tasks = taskNotDestroyed(request.payload.tasks);
        const len = tasks.length;
        let completed = 0;
        for (let i = 0; i < len; i++) {
          if (tasks[i].isDone == true) completed += 1;
        }
        reply('Tasks:' + len + ", Completed:" + completed);
    }
});

server.start((err) => {
    if (err) { throw err; }
    console.log(`Server running at: ${server.info.uri}`);
});
