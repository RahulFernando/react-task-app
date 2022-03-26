interface ITaskListSelector {
    tasks: {
        taskListData: {
            loading: boolean,
            data: Array<ITask>,
            error: any
        }
    }
}