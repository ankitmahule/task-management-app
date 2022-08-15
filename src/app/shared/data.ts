import { ITaskCategory } from '../models/task.interface';

export const DATA: ITaskCategory[] = [
  {
    categoryId: 2345,
    categoryName: "To Do",
    tasks: [
      {
        taskName: "Pay Electricity Bill",
      },
      {
        taskName: "Make Grocery List",
      },
    ],
  },
  {
    categoryId: 7895,
    categoryName: "In Progress",
    tasks: [
      {
        taskName: "Iron Clothes",
      },
    ],
  },
  {
    categoryId: 5678,
    categoryName: "Done",
    tasks: [
      {
        taskName: "Buy Running Shoes",
      },
    ],
  },
];
