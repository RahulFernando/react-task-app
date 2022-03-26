const useChange = () => {
  const updateList = (
    action: string,
    taskList: Array<ITask>,
    task: ITask,
    value?: string
  ) => {
    let tempList = [...taskList];

    if (action === 'UPDATE') {
      const index = tempList.findIndex((obj) => obj.id === task.id);
      tempList[index] = { ...task, task: value ? value : '' };
    }

    if (action === 'DELETE') {
        tempList = taskList.filter((obj) => obj.id !== task.id)
    }

    return tempList;
  };

  return { updateList };
};

export default useChange;
