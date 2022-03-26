import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// actions
import { addNewTaskStart } from '../../redux/tasks/actions';

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
    (state: ITaskSelectdSelector) => state.tasks.selectedTask
  );

  const formik = useFormik({
    initialValues: {
      task: selectedTask ? selectedTask.task : '',
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      task: Yup.string().trim().required('Please enter valid task'),
    }),
    onSubmit: (values) => {
      dispatch(addNewTaskStart(values.task));
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
            helperText={formik.errors.task && formik.touched.task ? formik.errors.task : ''}
            onChange={formik.handleChange}
          />
          <CardActions className={classes['card-actions']}>
            <Button label="SAVE" type={BUTTON_TYPES.SUBMIT} />
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewTask;
