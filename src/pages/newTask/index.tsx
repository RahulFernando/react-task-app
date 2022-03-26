import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// actions
import { addNewTaskStart, fetchTaskListStart, fetchTaskListSuccess, resetSelectTask, updateTaskStart } from '../../redux/tasks/actions';

// components
import Card from '../../components/card/card';
import InputField from '../../components/inputField/inputField';
import Button from '../../components/button/button';

// enum
import { BUTTON_TYPES, INPUT_TYPES } from '../../enum';

// style
import classes from './style.module.css';

const NewTask: React.FC = () => {
  const dispatch = useDispatch();

  const selectedTask = useSelector(
    (state: ITaskSelectedSelector) => state.tasks.selectedTask
  );

  const updateTaskData = useSelector(
    (state: ITaskUpdateDataSelector) => state.tasks.updateTaskData.data
  );

  const taskList = useSelector(
    (state: ITaskListSelector) => state.tasks.taskListData.data
  );

  const changeListObjectHandler = () => {
    const tempList = [...taskList];
    const index = tempList.findIndex((task) => task.id === selectedTask.id);
    tempList[index] = { ...selectedTask, task: formik.values.task };
    
    dispatch(fetchTaskListSuccess(tempList));
    dispatch(resetSelectTask());
  }

  useEffect(() => {
    if (updateTaskData) {
      changeListObjectHandler();
    }
  }, [updateTaskData])

  const formik = useFormik({
    initialValues: {
      task: selectedTask ? selectedTask.task : '',
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      task: Yup.string().trim().required('Please enter valid task'),
    }),
    onSubmit: (values) => {
      if (selectedTask) {
        dispatch(updateTaskStart({ id: selectedTask.id, task: values.task }));
      } else {
        dispatch(addNewTaskStart(values.task));
      }
    },
  });

  return (
    <Card className={classes.container}>
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <InputField
            label="Enter task"
            name="task"
            type={INPUT_TYPES.TEXT}
            value={formik.values.task}
            error={formik.errors.task && formik.touched.task ? true : false}
            helperText={
              formik.errors.task && formik.touched.task
                ? formik.errors.task
                : ''
            }
            onChange={formik.handleChange}
          />
          <CardActions className={classes['card-actions']}>
            <Button
              label={selectedTask ? 'UPDATE' : 'SAVE'}
              type={BUTTON_TYPES.SUBMIT}
            />
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewTask;
