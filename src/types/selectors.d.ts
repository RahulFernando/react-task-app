interface ITaskListSelector {
  tasks: {
    taskListData: {
      loading: boolean;
      data: Array<ITask>;
      error: any;
    };
  };
}
interface ITaskSelectdSelector {
  tasks: {
    selectedTask: ITask;
  };
}
