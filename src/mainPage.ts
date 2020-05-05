import { Board } from "./board";

export class MainPage {
    boards: Board[] = [];
    boardsContainer: HTMLDivElement = document.querySelector("#boards");
    addBoardButton: HTMLButtonElement = document.querySelector("#addBoardButton");
    removeBoardButton: HTMLButtonElement = document.querySelector("#removeBoardButton");



    constructor() {
        this.getBoards();
        this.writeBoards();

        this.addBoardButton
            .addEventListener('click', () => this.initialBoard());
        this.removeBoardButton
            .addEventListener('click', () => this.removeBoard());
    }

    initialBoard() {
        let title: string = prompt("Dodaj nazwę kolumny");
        if (title != null) {
            let board: Board = new Board(title);
            this.boards.push(board);
            // this.addBoardButton.className = "bothButtons";
            // this.removeBoardButton.className = "bothButtons removeButtonVisible";
            this.saveBoard();
            location.reload();

        }
    }

    removeBoard() {
        let title: string = prompt("Usuń kolumnę o nazwie");
        if (title != null) {
            const index: number = this.boards.map(x => x.title).indexOf(title);
            this.boards.splice(index, 1);

            this.saveBoard();
            location.reload();
        }
        //TODO: NIE USUWAJ JESLI NIE MA PODANEGO TYTULU
        //TODO: usun wrazliwosc na wielkosc liter
    }

    drawBoard(board: Board) {
        let tempBoard: HTMLDivElement = board.renderBoard();
        this.boardsContainer.appendChild(tempBoard);
    }

    saveBoard() {
        localStorage.setItem("board", JSON.stringify(this.boards));
    }

    getBoards() {
        if (JSON.parse(localStorage.getItem('board')) != null)
            this.boards = JSON.parse(localStorage.getItem('board'));
    }
    writeBoards() {
        this.boards.forEach(board => {
            this.drawBoard(board);
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new MainPage();
});