import React from 'react';
import ListItem from '@mui/material/ListItem';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// style
import classes from './style.module.css';

interface Props {
  task: string;
  onClick: (event: React.MouseEvent) => void;
  onDelete: (event: React.MouseEvent) => void;
}

const TaskItem: React.FC<Props> = ({ task, onClick, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" onClick={onClick}>
            <EditIcon />
          </IconButton>
          ,
          <IconButton edge="end" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </>
      }
      className={classes['list-item']}
    >
      <h5>{task}</h5>
    </ListItem>
  );
};

export default TaskItem;
