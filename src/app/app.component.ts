import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private taskName: string = '';

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      data: { name: this.taskName },
    });

    dialogRef.afterClosed().subscribe((result) => {
      /* console.log('The dialog was closed');
      this.animal = result; */
    });
  }

  public tasksList= [
    {
      categoryId: 1,
      categoryName: 'To Do',
      tasks: [
        {
          taskId: 101,
          taskName: 'Pay Electricity Bill',
        },
        { taskId: 102, taskName: 'Pay Electricity Bill' },
        { taskId: 103, taskName: 'Pay Electricity Bill' },
        { taskId: 104, taskName: 'Pay Electricity Bill' },
      ],
    },
    {
      categoryId: 2,
      categoryName: 'In Progress',
      tasks: [
        {
          taskId: 101,
          taskName: 'Pay Electricity Bill',
        },
        { taskId: 102, taskName: 'Pay Electricity Bill' },
        { taskId: 103, taskName: 'Pay Electricity Bill' },
        { taskId: 104, taskName: 'Pay Electricity Bill' },
      ],
    },
    {
      categoryId: 3,
      categoryName: 'Done',
      tasks: [
        {
          taskId: 101,
          taskName: 'Pay Electricity Bill',
        },
        { taskId: 102, taskName: 'Pay Electricity Bill' },
        { taskId: 103, taskName: 'Pay Electricity Bill' },
        { taskId: 104, taskName: 'Pay Electricity Bill' },
      ],
    },
  ];
}
