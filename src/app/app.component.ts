import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskManagementService } from './service/task-management.service';
import { DATA } from './shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private taskName: string = '';
  public tasksList = DATA;

  constructor(
    private dialog: MatDialog,
    private taskManagementService: TaskManagementService
  ) {}

  public openAddTaskDialog(isAddingList: boolean, categoryId?: number): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '400px',
      data: { taskName: this.taskName, isAddingList, categoryId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.taskManagementService.addTasks(result);
      }
    });
  }
}
