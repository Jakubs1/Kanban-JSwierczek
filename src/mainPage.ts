import { Board } from "./board";

export class MainPage {
    boards: Board[] = [];
    boardsContainer: HTMLDivElement = document.querySelector("#boards");
    addBoardButton: HTMLButtonElement = document.querySelector("#addBoardButton");
    removeBoardButton: HTMLButtonElement = document.querySelector("#removeBoardButton");
    notesSection = document.createElement("div");
    pageAddButton = document.createElement("button");


    constructor() {
        this.addBoardButton.addEventListener('click', () => this.initialBoard());
        this.removeBoardButton.addEventListener('click', () => this.removeBoard());
    }

    initialBoard() {
        let title = prompt("Dodaj nazwę kolumny");
        if (title != null) {
            this.drawBoard(title);
            let board: Board = new Board(title, this.notesSection);
            this.boards.push(board);
            this.addBoardButton.className = "bothButtons";
            this.removeBoardButton.className = "bothButtons removeButtonVisible";

            this.pageAddButton.addEventListener("click", () => board.taskCreate());

        }
    }

    removeBoard() {
        let title = prompt("Usuń kolumnę o nazwie");
        if (title != null) {
            const index = this.boards.map(x => x.title).indexOf(title);
            this.boards.splice(index, 1);
        }
    }

    drawBoard(title) {
        const singleBoard = document.createElement("div")
        const titleSection = document.createElement("div");
        const boardTitle = document.createElement("h1");
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


    }
}

document.addEventListener("DOMContentLoaded", () => {
    new MainPage();
    // TODO

});