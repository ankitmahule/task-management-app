import { TestBed } from '@angular/core/testing';
import { DATA } from '../shared/data';

import { TaskManagementService } from './task-management.service';

describe('TaskManagementService', () => {
  let service: TaskManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add tasks', () => {
    const task = {
      isAddingList: false,
      categoryName: 'New task',
      categoryId: 1234,
      tasks: [],
    }
    const lenghtOfData = DATA.length;
    service.addTasks(task);
    expect(DATA.length).toEqual(lenghtOfData);
  });
});
