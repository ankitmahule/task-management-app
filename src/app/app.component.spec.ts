import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AddTaskComponent } from './add-task/add-task.component';
import { AppComponent } from './app.component';
import { TaskManagementService } from './service/task-management.service';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let taskManagementService: TaskManagementService;
  let matDialog: MatDialog;
  let dialogSpy: jasmine.Spy;
  let dialogRefSpyObj = jasmine.createSpyObj({
    afterClosed: of({}),
    close: null,
  });
  dialogRefSpyObj.componentInstance = { body: '' };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule],
      declarations: [AppComponent, AddTaskComponent],
      providers: [TaskManagementService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    taskManagementService = fixture.debugElement.injector.get(
      TaskManagementService
    );
    matDialog = fixture.debugElement.injector.get(MatDialog);
    dialogSpy = spyOn(matDialog, 'open').and.returnValue(
      dialogRefSpyObj
    );
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Should open dialog to add task or list', () => {
    spyOn(taskManagementService, 'addTasks').and.stub();
    component.openAddTaskDialog(true, 1234);
    expect(dialogSpy).toHaveBeenCalledWith(AddTaskComponent, {
      data: { taskName: '', isAddingList: true, categoryId: 1234 },
    });
    expect(dialogRefSpyObj.afterClosed).toHaveBeenCalled();
  });
});
