import { Task } from "./task";

export class Board {
    title: string;
    tasks: Task[] = [];
    notesSection: HTMLDivElement = document.createElement("div");
    pageAddButton: HTMLButtonElement = document.createElement("button");
    constructor(header: string) {
        this.title = header;

        this.notesSection.className = "notesSection";
        this.pageAddButton.id = "pageAddButton";
        this.pageAddButton.innerHTML = "Dodaj kartkę";
        this.notesSection.appendChild(this.pageAddButton);
        this.pageAddButton
            .addEventListener("click", () => this.initialTask());

        this.getTasks();
        this.writeTasks();
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