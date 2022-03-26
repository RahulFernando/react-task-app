import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';

// actions
import {
  deleteTaskStart,
  fetchTaskListStart,
  fetchTaskListSuccess,
  resetDeleteTask,
  selectTask,
} from '../../redux/tasks/actions';

// components
import TaskItem from './taskItem';
import Card from '../../components/card/card';
import useChange from '../../hooks/use-change';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const { updateList } = useChange();

  const [selectedTask, setSelectedTask] = useState<ITask>({ task: '' });

  const taskList = useSelector(
    (state: ITaskListSelector) => state.tasks.taskListData.data
  );

  const deletedTaskData = useSelector(
    (state: ITaskDeleteDataSelector) => state.tasks.deleteTaskData.data
  );

  useEffect(() => {
    dispatch(fetchTaskListStart());
  }, []);

  useEffect(() => {
    if (deletedTaskData) {
      dispatch(
        fetchTaskListSuccess(updateList('DELETE', taskList, selectedTask))
      );
      dispatch(resetDeleteTask());
    }
  }, [deletedTaskData]);

  const taskClickHandler = (task: ITask, e: React.MouseEvent) => {
    dispatch(selectTask(task));
  };

  const taskDeleteHandler = (task: ITask, e: React.MouseEvent) => {
    setSelectedTask(task);
    dispatch(deleteTaskStart({ id: task.id }));
  };

  return (
    <Card>
      <List>
        {taskList &&
          taskList.length > 0 &&
          taskList.map((task) => (
            <TaskItem
              task={task.task}
              onClick={taskClickHandler.bind(null, task)}
              onDelete={taskDeleteHandler.bind(null, task)}
              key={task.id}
            />
          ))}
      </List>
    </Card>
  );
};

export default TaskList;
