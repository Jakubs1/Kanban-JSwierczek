import { Task } from "./task";
import { BoardData } from "./boardData";

export class Board {
    title: string;
    tasks: Task[] = [];
    boardData: BoardData;
    notesSection: HTMLDivElement = document.createElement("div");
    pageAddButton: HTMLButtonElement = document.createElement("button");
    constructor(boardData: BoardData) {
        this.title = boardData.title;
        this.tasks = boardData.tasks;
        this.boardData = boardData;
        this.pageAddButton
            .addEventListener("click", () => this.initialTask());

        this.getTasks();
        this.writeTasks();
    }

    renderBoard() {
        const titleSection: HTMLDivElement = document.createElement("div");
        const boardTitle: HTMLHeadingElement = document.createElement("h1");
        const singleBoard: HTMLDivElement = document.createElement('div');

        titleSection.className = "titleSection";
        boardTitle.className = "boardTitle";
        singleBoard.className = "singleBoard";
        this.notesSection.className = "taskSection";
        boardTitle.innerText = this.title;
        this.notesSection.className = "notesSection";
        this.pageAddButton.id = "pageAddButton";
        this.pageAddButton.innerHTML = "Dodaj kartkę";

        this.notesSection.appendChild(this.pageAddButton);
        titleSection.appendChild(boardTitle);
        singleBoard.appendChild(titleSection);
        singleBoard.appendChild(this.notesSection);

        return singleBoard;
    }

    initialTask() {
        let content: string = prompt("Nazwij karteczkę");
        if (content != null) {
            let task: Task = new Task(content);
            this.tasks.push(task);

            this.saveTask(task);
            location.reload();
        }
    }

    saveTask(task: Task) {
        if (JSON.parse(localStorage.getItem('boardData')) != null) {
            let boardsData = JSON.parse(localStorage.getItem('boardData'));
            const index: number = boardsData.map(x => x.title).indexOf(this.title);
            boardsData[index].tasks.push(task);

            localStorage.setItem('boardData', JSON.stringify(boardsData));
        }
    }

    getTasks() {
        if (this.boardData.tasks != null) {
            this.tasks = this.boardData.tasks;
        }
    }

    writeTasks() {
        this.tasks.forEach(task => {
            this.drawTask(task);
        })
    }

    drawTask(task: Task) {
        const taskSection: HTMLDivElement = document.createElement("div");
        const taskDescription: HTMLParagraphElement = document.createElement("p");
        taskSection.className = "taskSection";
        taskDescription.className = "taskDescription";
        taskDescription.innerHTML = task.description;
        taskSection.appendChild(taskDescription);
        this.notesSection.appendChild(taskSection);
    }

}