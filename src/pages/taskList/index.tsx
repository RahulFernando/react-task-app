import React from 'react';
import List from '@mui/material/List';

// components
import TaskItem from './taskItem';
import Card from '../../components/card/card';

const TaskList = () => {
  return (
    <Card>
      <List>
        <TaskItem task="Hello World" onClick={(e) => {}} />
      </List>
    </Card>
  );
};

export default TaskList;
