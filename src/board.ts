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
        this.pageAddButton.addEventListener("click", () => this.taskCreate());
    }

    taskCreate() {
        let content = prompt("Nazwij karteczkę");
        if (content != null) {
            let task: Task = new Task(content);
            this.tasks.push(task);
            this.drawTask(task);

        }
    }

    drawTask(task: Task) {
        const taskSection = document.createElement("div");
        const taskDescription = document.createElement("p");
        taskSection.className = "taskSection";
        taskDescription.className = "taskDescription";
        taskDescription.innerHTML = task.description;
        taskSection.appendChild(taskDescription);
        this.notesSection.appendChild(taskSection);
    }

}