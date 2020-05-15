import { Board } from "./board";
import { BoardData } from "./boardData";

export class MainPage {
    boards: Board[] = [];
    boardsData: BoardData[] = [];
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
            let boardData: BoardData = new BoardData(title);
            // let board: Board = new Board(title);
            this.boardsData.push(boardData);
            // this.boards.push(board);
            // this.addBoardButton.className = "bothButtons";
            // this.removeBoardButton.className = "bothButtons removeButtonVisible";
            this.saveBoard();
            location.reload();

        }
    }

    removeBoard() {
        let title: string = prompt("Usuń kolumnę o nazwie");
        if (title != "") {
            const index: number = this.boardsData.map(x => x.title).indexOf(title);
            console.log(index);
            if (index != -1) {
                this.boardsData.splice(index, 1);
                this.saveBoard();
                location.reload();
            }
        }
    }

    saveBoard() {
        localStorage.setItem("boardData", JSON.stringify(this.boardsData));
    }

    getBoards() {
        if (JSON.parse(localStorage.getItem('boardData')) != null) {
            this.boardsData = JSON.parse(localStorage.getItem('boardData'));
            this.boardsData.forEach(boardData => {
                this.boards.push(new Board(boardData));
            })
        }
    }

    drawBoard(board: Board) {
        let tempBoard: HTMLDivElement = board.renderBoard();
        this.boardsContainer.appendChild(tempBoard);
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