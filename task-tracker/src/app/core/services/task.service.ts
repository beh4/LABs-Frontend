import { Injectable } from '@angular/core';
import { Task } from '../models/task.models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private lastId = 0;

  constructor() { }

  getAllTasks(): Task[] {
    return [...this.tasks];
  }

  addTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Task {
    const now = new Date();
    const newTask: Task = {
      ...task,
      id: ++this.lastId,
      createdAt: now,
      updatedAt: now
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, updates: Partial<Omit<Task, 'id' | 'createdAt' | 'creator'>>): Task | null {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) return null;

    const updatedTask = {
      ...this.tasks[taskIndex],
      ...updates,
      updatedAt: new Date()
    };

    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  deleteTask(id: number): boolean {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(t => t.id !== id);
    return this.tasks.length !== initialLength;
  }
}