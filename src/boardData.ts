import { Task } from "./task";

export class BoardData {
    title: string;
    tasks: Task[] = [];
    constructor(title: string) {
        this.title = title;
    }
}