"use strict";
exports.__esModule = true;
var task_1 = require("./task");
var Board = /** @class */ (function () {
    function Board(header) {
        var _this = this;
        this.tasks = [];
        this.notesSection = document.createElement("div");
        this.pageAddButton = document.createElement("button");
        this.title = header;
        this.notesSection.className = "notesSection";
        this.pageAddButton.id = "pageAddButton";
        this.pageAddButton.innerHTML = "Dodaj kartkę";
        this.notesSection.appendChild(this.pageAddButton);
        this.pageAddButton
            .addEventListener("click", function () { return _this.initialTask(); });
        this.getTasks();
        this.writeTasks();
    }
    Board.prototype.initialTask = function () {
        var content = prompt("Nazwij karteczkę");
        if (content != null) {
            var task = new task_1.Task(content);
            this.tasks.push(task);
            this.saveTask();
            location.reload();
        }
    };
    Board.prototype.saveTask = function () {
        localStorage.setItem('task', JSON.stringify(this.tasks));
    };
    Board.prototype.getTasks = function () {
        if (JSON.parse(localStorage.getItem('task')) != null)
            this.tasks = JSON.parse(localStorage.getItem('task'));
    };
    Board.prototype.writeTasks = function () {
        var _this = this;
        this.tasks.forEach(function (task) {
            _this.drawTask(task);
        });
    };
    Board.prototype.drawTask = function (task) {
        var taskSection = document.createElement("div");
        var taskDescription = document.createElement("p");
        taskSection.className = "taskSection";
        taskDescription.className = "taskDescription";
        taskDescription.innerHTML = task.description;
        taskSection.appendChild(taskDescription);
        this.notesSection.appendChild(taskSection);
    };
    return Board;
}());
exports.Board = Board;
