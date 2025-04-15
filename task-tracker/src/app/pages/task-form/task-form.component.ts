import { Component, EventEmitter, Output } from '@angular/core';
import { Priority, Status, Task, TaskType } from '../../core/models/task.models';
import { TaskService } from '../../core/services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<void>();

  newTask: Omit<Task, 'id' | 'createdAt' | 'updatedAt'> = {
    type: 'task',
    priority: 'low',
    status: 'open',
    title: '',
    creator: '',
    description: '',
    assignee: ''
  };

  taskTypes: TaskType[] = ['task', 'bug'];
  priorities: Priority[] = ['low', 'medium', 'high', 'critical'];
  statuses: Status[] = ['open', 'in-progress', 'done', 'closed'];

  constructor(private taskService: TaskService) {}

  onSubmit(): void {
    if (this.isFormValid()) {
      this.taskService.addTask(this.newTask);
      this.taskAdded.emit();
      this.resetForm();
    }
  }

  isFormValid(): boolean {
    return !!this.newTask.title && !!this.newTask.creator && !!this.newTask.type && !!this.newTask.status;
  }

  resetForm(): void {
    this.newTask = {
      type: 'task',
      priority: 'low',
      status: 'open',
      title: '',
      creator: '',
      description: '',
      assignee: ''
    };
  }
}