(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function Task(data) {
    this.title = ko.observable(data.title);
    this.isDone = ko.observable(data.isDone);
}

function TaskListViewModel() {
    // Data
    var self = this;
    self.tasks = ko.observableArray([]);
    self.newTaskText = ko.observable();
    self.incompleteTasks = ko.computed(function () {
        return ko.utils.arrayFilter(self.tasks(), function (task) {
            return !task.isDone();
        });
    });

    // Operations
    self.addTask = function () {
        self.tasks.push(new Task({ title: this.newTaskText() }));
        self.newTaskText("");
    };
    self.removeTask = function (task) {
        self.tasks.remove(task);
    };

    // Load initial state from server, convert it to Task instances, then populate self.tasks
    $.getJSON("/tasks", function (allData) {
        var mappedTasks = $.map(allData, function (item) {
            return new Task(item);
        });
        self.tasks(mappedTasks);
    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

ko.applyBindings(new TaskListViewModel());

document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.8'><\/script>".replace("HOST", location.hostname));
// document.write(require("./content.js"));
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0bXAvYmFiZWwvZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBUYXNrKGRhdGEpIHtcbiAgICB0aGlzLnRpdGxlID0ga28ub2JzZXJ2YWJsZShkYXRhLnRpdGxlKTtcbiAgICB0aGlzLmlzRG9uZSA9IGtvLm9ic2VydmFibGUoZGF0YS5pc0RvbmUpO1xufVxuXG5mdW5jdGlvbiBUYXNrTGlzdFZpZXdNb2RlbCgpIHtcbiAgICAvLyBEYXRhXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudGFza3MgPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgIHNlbGYubmV3VGFza1RleHQgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgc2VsZi5pbmNvbXBsZXRlVGFza3MgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBrby51dGlscy5hcnJheUZpbHRlcihzZWxmLnRhc2tzKCksIGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRhc2suaXNEb25lKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gT3BlcmF0aW9uc1xuICAgIHNlbGYuYWRkVGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi50YXNrcy5wdXNoKG5ldyBUYXNrKHsgdGl0bGU6IHRoaXMubmV3VGFza1RleHQoKSB9KSk7XG4gICAgICAgIHNlbGYubmV3VGFza1RleHQoXCJcIik7XG4gICAgfTtcbiAgICBzZWxmLnJlbW92ZVRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICBzZWxmLnRhc2tzLnJlbW92ZSh0YXNrKTtcbiAgICB9O1xuXG4gICAgLy8gTG9hZCBpbml0aWFsIHN0YXRlIGZyb20gc2VydmVyLCBjb252ZXJ0IGl0IHRvIFRhc2sgaW5zdGFuY2VzLCB0aGVuIHBvcHVsYXRlIHNlbGYudGFza3NcbiAgICAkLmdldEpTT04oXCIvdGFza3NcIiwgZnVuY3Rpb24gKGFsbERhdGEpIHtcbiAgICAgICAgdmFyIG1hcHBlZFRhc2tzID0gJC5tYXAoYWxsRGF0YSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFzayhpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYudGFza3MobWFwcGVkVGFza3MpO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGVcIik7XG4gICAgfSk7XG59XG5cbmtvLmFwcGx5QmluZGluZ3MobmV3IFRhc2tMaXN0Vmlld01vZGVsKCkpO1xuXG5kb2N1bWVudC53cml0ZShcIjxzY3JpcHQgYXN5bmMgc3JjPSdodHRwOi8vSE9TVDozMDAwL2Jyb3dzZXItc3luYy9icm93c2VyLXN5bmMtY2xpZW50LmpzP3Y9Mi4xOC44Jz48XFwvc2NyaXB0PlwiLnJlcGxhY2UoXCJIT1NUXCIsIGxvY2F0aW9uLmhvc3RuYW1lKSk7XG4vLyBkb2N1bWVudC53cml0ZShyZXF1aXJlKFwiLi9jb250ZW50LmpzXCIpKTsiXX0=
