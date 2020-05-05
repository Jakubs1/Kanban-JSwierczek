import { Task } from "./task";

export class Board {
    title: string;
    tasks: Task[] = [];
    notesSection: HTMLDivElement = document.createElement("div");
    pageAddButton: HTMLButtonElement = document.createElement("button");
    constructor(header: string) {
        this.title = header;

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
        boardTitle.innerHTML = this.title;
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

            this.saveTask();
            location.reload();
        }
    }

    saveTask() {
        localStorage.setItem('task', JSON.stringify(this.tasks));
    }

    getTasks() {
        if (JSON.parse(localStorage.getItem('task')) != null)
            this.tasks = JSON.parse(localStorage.getItem('task'));
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