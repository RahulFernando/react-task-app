import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';

// actions
import { fetchTaskListStart } from '../../redux/tasks/actions';

// components
import TaskItem from './taskItem';
import Card from '../../components/card/card';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();

  const taskList = useSelector(
    (state: ITaskListSelector) => state.tasks.taskListData.data
  );

  useEffect(() => {
    dispatch(fetchTaskListStart());
  }, []);

  return (
    <Card>
      <List>
        {taskList &&
          taskList.length > 0 &&
          taskList.map((task) => (
            <TaskItem task={task.task} onClick={(e) => {}} key={task.id} />
          ))}
      </List>
    </Card>
  );
};

export default TaskList;
