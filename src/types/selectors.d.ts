interface ITaskAddSelector {
  tasks: {
    newTaskData: {
      loading: boolean;
      data: ITask;
      error: any;
    };
  };
}
interface ITaskListSelector {
  tasks: {
    taskListData: {
      loading: boolean;
      data: Array<ITask>;
      error: any;
    };
  };
}
interface ITaskSelectedSelector {
  tasks: {
    selectedTask: ITask;
  };
}
interface ITaskUpdateDataSelector {
  tasks: {
    updateTaskData: {
      loading: boolean;
      data: any;
      error: string;
    };
  };
}
interface ITaskDeleteDataSelector {
  tasks: {
    deleteTaskData: {
      loading: boolean;
      data: any;
      error: string;
    };
  };
}
