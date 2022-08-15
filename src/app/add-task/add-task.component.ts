import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public getAddTaskData(): any {
    if(!this.data.isAddingList) {
      return this.data;
    }
    this.data.categoryId = Math.floor(1000 + Math.random() * 9000);
    this.data.categoryName = this.data.taskName;
    this.data.tasks = [];
    return this.data;
  } 
}
