"use strict";
exports.__esModule = true;
var board_1 = require("./board");
var MainPage = /** @class */ (function () {
    function MainPage() {
        var _this = this;
        this.boards = [];
        this.boardsContainer = document.querySelector("#boards");
        this.addBoardButton = document.querySelector("#addBoardButton");
        this.removeBoardButton = document.querySelector("#removeBoardButton");
        this.addBoardButton
            .addEventListener('click', function () { return _this.initialBoard(); });
        this.removeBoardButton
            .addEventListener('click', function () { return _this.removeBoard(); });
        this.getBoards();
        this.writeBoards();
    }
    MainPage.prototype.initialBoard = function () {
        var title = prompt("Dodaj nazwę kolumny");
        if (title != null) {
            var board = new board_1.Board(title);
            this.boards.push(board);
            this.addBoardButton.className = "bothButtons";
            this.removeBoardButton.className = "bothButtons removeButtonVisible";
            this.saveBoard();
            location.reload();
        }
    };
    MainPage.prototype.removeBoard = function () {
        var title = prompt("Usuń kolumnę o nazwie");
        if (title != null) {
            var index = this.boards.map(function (x) { return x.title; }).indexOf(title);
            this.boards.splice(index, 1);
            this.saveBoard();
            location.reload();
        }
    };
    MainPage.prototype.drawBoard = function (board) {
        var singleBoard = document.createElement("div");
        var titleSection = document.createElement("div");
        var boardTitle = document.createElement("h1");
        titleSection.className = "titleSection";
        boardTitle.className = "boardTitle";
        singleBoard.className = "singleBoard";
        boardTitle.innerHTML = board.title;
        titleSection.appendChild(boardTitle);
        singleBoard.appendChild(titleSection);
        singleBoard.appendChild(board.notesSection);
        this.boardsContainer.appendChild(singleBoard);
    };
    MainPage.prototype.saveBoard = function () {
        localStorage.setItem("board", JSON.stringify(this.boards));
    };
    MainPage.prototype.getBoards = function () {
        if (JSON.parse(localStorage.getItem('board')) != null)
            this.boards = JSON.parse(localStorage.getItem('board'));
    };
    MainPage.prototype.writeBoards = function () {
        var _this = this;
        this.boards.forEach(function (board) {
            _this.drawBoard(board);
        });
    };
    return MainPage;
}());
exports.MainPage = MainPage;
document.addEventListener("DOMContentLoaded", function () {
    new MainPage();
});
