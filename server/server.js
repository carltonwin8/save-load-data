'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3001, host: 'localhost' });

function task(title, isDone) {
  return { title: title, isDone: isDone };
}

const tasks = [
  task("Wire the money to Panama", true),
  task('Get hair dye, beard trimmer, dark glasses and "passport"', false),
  task("Book taxi to airport", false),
  task("Arrange for someone to look after the cat", false)
]

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(tasks);
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
