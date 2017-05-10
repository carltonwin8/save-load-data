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
            return !task.isDone() && !task._destroy;
        });
    });

    // Operations
    self.addTask = function () {
        self.tasks.push(new Task({ title: this.newTaskText() }));
        self.newTaskText("");
    };
    self.removeTask = function (task) {
        self.tasks.destroy(task);
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

    self.save = function () {
        $.ajax("/tasks/save", {
            data: ko.toJSON({ tasks: self.tasks }),
            type: "post", contentType: "application/json",
            success: function success(result) {
                alert(result);
            }
        });
    };
}

ko.applyBindings(new TaskListViewModel());

document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.8'><\/script>".replace("HOST", location.hostname));
// document.write(require("./content.js"));
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0bXAvYmFiZWwvZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIFRhc2soZGF0YSkge1xuICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKGRhdGEudGl0bGUpO1xuICAgIHRoaXMuaXNEb25lID0ga28ub2JzZXJ2YWJsZShkYXRhLmlzRG9uZSk7XG59XG5cbmZ1bmN0aW9uIFRhc2tMaXN0Vmlld01vZGVsKCkge1xuICAgIC8vIERhdGFcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi50YXNrcyA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XG4gICAgc2VsZi5uZXdUYXNrVGV4dCA9IGtvLm9ic2VydmFibGUoKTtcbiAgICBzZWxmLmluY29tcGxldGVUYXNrcyA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmFycmF5RmlsdGVyKHNlbGYudGFza3MoKSwgZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgIHJldHVybiAhdGFzay5pc0RvbmUoKSAmJiAhdGFzay5fZGVzdHJveTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBPcGVyYXRpb25zXG4gICAgc2VsZi5hZGRUYXNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnRhc2tzLnB1c2gobmV3IFRhc2soeyB0aXRsZTogdGhpcy5uZXdUYXNrVGV4dCgpIH0pKTtcbiAgICAgICAgc2VsZi5uZXdUYXNrVGV4dChcIlwiKTtcbiAgICB9O1xuICAgIHNlbGYucmVtb3ZlVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgIHNlbGYudGFza3MuZGVzdHJveSh0YXNrKTtcbiAgICB9O1xuXG4gICAgLy8gTG9hZCBpbml0aWFsIHN0YXRlIGZyb20gc2VydmVyLCBjb252ZXJ0IGl0IHRvIFRhc2sgaW5zdGFuY2VzLCB0aGVuIHBvcHVsYXRlIHNlbGYudGFza3NcbiAgICAkLmdldEpTT04oXCIvdGFza3NcIiwgZnVuY3Rpb24gKGFsbERhdGEpIHtcbiAgICAgICAgdmFyIG1hcHBlZFRhc2tzID0gJC5tYXAoYWxsRGF0YSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGFzayhpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYudGFza3MobWFwcGVkVGFza3MpO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGVcIik7XG4gICAgfSk7XG5cbiAgICBzZWxmLnNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQuYWpheChcIi90YXNrcy9zYXZlXCIsIHtcbiAgICAgICAgICAgIGRhdGE6IGtvLnRvSlNPTih7IHRhc2tzOiBzZWxmLnRhc2tzIH0pLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxua28uYXBwbHlCaW5kaW5ncyhuZXcgVGFza0xpc3RWaWV3TW9kZWwoKSk7XG5cbmRvY3VtZW50LndyaXRlKFwiPHNjcmlwdCBhc3luYyBzcmM9J2h0dHA6Ly9IT1NUOjMwMDAvYnJvd3Nlci1zeW5jL2Jyb3dzZXItc3luYy1jbGllbnQuanM/dj0yLjE4LjgnPjxcXC9zY3JpcHQ+XCIucmVwbGFjZShcIkhPU1RcIiwgbG9jYXRpb24uaG9zdG5hbWUpKTtcbi8vIGRvY3VtZW50LndyaXRlKHJlcXVpcmUoXCIuL2NvbnRlbnQuanNcIikpOyJdfQ==
