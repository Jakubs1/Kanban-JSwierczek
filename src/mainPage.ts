import { Board } from "./board";

export class MainPage {
    boards: Board[] = [];
    boardsContainer: HTMLDivElement = document.querySelector("#boards");
    addBoardButton: HTMLButtonElement = document.querySelector("#addBoardButton");
    removeBoardButton: HTMLButtonElement = document.querySelector("#removeBoardButton");



    constructor() {
        this.addBoardButton.addEventListener('click', () => this.initialBoard());
        this.removeBoardButton.addEventListener('click', () => this.removeBoard());
    }

    initialBoard() {
        let title = prompt("Dodaj nazwę kolumny");
        if (title != null) {
            let board: Board = new Board(title);
            this.drawBoard(title, board.notesSection);
            this.boards.push(board);
            this.addBoardButton.className = "bothButtons";
            this.removeBoardButton.className = "bothButtons removeButtonVisible";
        }
    }

    removeBoard() {
        let title = prompt("Usuń kolumnę o nazwie");
        if (title != null) {
            const index = this.boards.map(x => x.title).indexOf(title);
            this.boards.splice(index, 1);
        }
    }

    drawBoard(title, notesSection) {
        const singleBoard = document.createElement("div")
        const titleSection = document.createElement("div");
        const boardTitle = document.createElement("h1");
        titleSection.className = "titleSection";
        boardTitle.className = "boardTitle";
        singleBoard.className = "singleBoard";
        boardTitle.innerHTML = title;
        titleSection.appendChild(boardTitle);
        singleBoard.appendChild(titleSection);
        singleBoard.appendChild(notesSection);
        this.boardsContainer.appendChild(singleBoard);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new MainPage();
});