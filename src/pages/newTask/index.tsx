import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// components
import Card from '../../components/card/card';
import InputField from '../../components/inputField/inputField';
import Button from '../../components/button/button';

import { BUTTON_COLORS, BUTTON_TYPES, INPUT_TYPES } from '../../enum';

// style
import classes from './style.module.css';

const NewTask = () => {
  return (
    <Card className={classes.container}>
      <CardContent>
        <form>
          <InputField
            label="Enter task"
            name="task"
            type={INPUT_TYPES.TEXT}
            error={false}
            helperText=""
            onChange={(e) => {}}
          />
          <CardActions className={classes['card-actions']}>
            <Button
              label="SAVE"
              type={BUTTON_TYPES.SUBMIT}
            />
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewTask;
