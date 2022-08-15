export interface ITaskCategory {
  categoryId: number;
  categoryName: string;
  tasks: ITask[];
}

export interface ITask {
  taskName: string;
}
