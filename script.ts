class Board {
    title: string;
    tasks: Task[];
    constructor(header: string) {
        this.title = header;
    }
}

class Task {
    description: string;
    constructor(content: string) {
        this.description = content;
    }
}

class Kanban {
    boards: Board[];
    boardsContainer: HTMLDivElement;
    constructor(container: HTMLDivElement) {
        this.boardsContainer = container;
    }
    initialBoard() {
        let title = prompt("Dodaj nazwę kolumny");
        if (title != null) {
            let board: Board = new Board(title);
            this.boards.push(board);
            this.drawBoard();
        }
    }

    removeBoard() {
        let title = prompt("Usuń kolumnę o nazwie");
        if (title != null) {
            const index = this.boards.indexOf();
            this.boards.splice(index, 1);
        }
    }

    drawBoard() {

    }
}

document.addEventListener("DOMContentLoaded", appStart);

function appStart() {
    let boardsContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("boards");
    let addBoardButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("addBoardButton");
    let removeBoardButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("removeBoardButton");
    let kanban: Kanban = new Kanban(boardsContainer);
    addBoardButton.addEventListener('click', () => kanban.initialBoard);
    removeBoardButton.addEventListener('click', () => kanban.removeBoard);

}