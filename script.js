var Board = /** @class */ (function () {
    function Board(header, container) {
        this.tasks = [];
        this.title = header;
        this.tasksContainer = container;
    }
    Board.prototype.taskCreate = function () {
        var content = prompt("Nazwij karteczkę");
        if (content != null) {
            var task = new Task(content);
            this.tasks.push(task);
            this.drawTask(task);
        }
    };
    Board.prototype.drawTask = function (task) {
        var taskSection = document.createElement("div");
        var taskDescription = document.createElement("p");
        taskSection.className = "taskSection";
        taskDescription.className = "taskDescription";
        taskDescription.innerHTML = task.description;
        taskSection.appendChild(taskDescription);
        this.tasksContainer.appendChild(taskSection);
    };
    return Board;
}());
var Task = /** @class */ (function () {
    function Task(content) {
        this.description = content;
    }
    return Task;
}());
var Kanban = /** @class */ (function () {
    function Kanban(container, addButton, removeButton) {
        this.boards = [];
        this.notesSection = document.createElement("div");
        this.pageAddButton = document.createElement("button");
        this.boardsContainer = container;
        this.addBoardButton = addButton;
        this.removeBoardButton = removeButton;
    }
    Kanban.prototype.initialBoard = function () {
        var title = prompt("Dodaj nazwę kolumny");
        if (title != null) {
            this.drawBoard(title);
            var board_1 = new Board(title, this.notesSection);
            this.boards.push(board_1);
            this.addBoardButton.className = "bothButtons";
            this.removeBoardButton.className = "bothButtons removeButtonVisible";
            this.pageAddButton.addEventListener("click", function () { return board_1.taskCreate(); });
        }
    };
    Kanban.prototype.removeBoard = function () {
        var title = prompt("Usuń kolumnę o nazwie");
        if (title != null) {
            // const index = this.boards.indexOf();
            // this.boards.splice(index, 1);
        }
    };
    Kanban.prototype.drawBoard = function (title) {
        var singleBoard = document.createElement("div");
        var titleSection = document.createElement("div");
        var boardTitle = document.createElement("h1");
        titleSection.className = "titleSection";
        this.notesSection.className = "notesSection";
        boardTitle.className = "boardTitle";
        singleBoard.className = "singleBoard";
        this.pageAddButton.id = "pageAddButton";
        this.pageAddButton.innerHTML = "Dodaj kartkę";
        boardTitle.innerHTML = title;
        titleSection.appendChild(boardTitle);
        singleBoard.appendChild(titleSection);
        this.notesSection.appendChild(this.pageAddButton);
        singleBoard.appendChild(this.notesSection);
        this.boardsContainer.appendChild(singleBoard);
    };
    return Kanban;
}());
document.addEventListener("DOMContentLoaded", appStart);
function appStart() {
    var boardsContainer = document.getElementById("boards");
    var addBoardButton = document.getElementById("addBoardButton");
    var removeBoardButton = document.getElementById("removeBoardButton");
    var kanban = new Kanban(boardsContainer, addBoardButton, removeBoardButton);
    addBoardButton.addEventListener('click', function () { return kanban.initialBoard(); });
    removeBoardButton.addEventListener('click', function () { return kanban.removeBoard(); });
}
