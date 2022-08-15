import { Injectable } from '@angular/core';
import { DATA } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  constructor() {}

  public addTasks(task: any): void {
    if (task.isAddingList) {
      DATA.push(task);
    } else {
      DATA.forEach((eachTask: any) => {
        if (task.categoryId === eachTask.categoryId) {
          eachTask.tasks.push(task);
        }
      });
    }
  }
}
