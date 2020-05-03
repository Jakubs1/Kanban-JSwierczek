import { Task } from "./task";

export class Board {
    title: string;
    tasks: Task[] = [];
    tasksContainer: HTMLDivElement;
    constructor(header: string, container: HTMLDivElement) {
        this.title = header;
        this.tasksContainer = container;
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
        this.tasksContainer.appendChild(taskSection);
    }

}