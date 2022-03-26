import { IAction } from '../../types/reducer';
import { ADD_NEW_TASK_FAILURE, ADD_NEW_TASK_START, ADD_NEW_TASK_SUCCESS } from './constants';

const init = {
  newTaskData: {
    loading: false,
    data: null,
    error: null,
  }
};

export default function tasks(state = init, { type, payload }: IAction) {
  switch (type) {
    case ADD_NEW_TASK_START:
      return {
        ...state,
        newTaskData: {
          ...state.newTaskData,
          loading: true,
        }
      };

    case ADD_NEW_TASK_SUCCESS:
      return {
        ...state,
        newTaskData: {
          ...state.newTaskData,
          loading: false,
          data: payload ? payload : null,
          error: null,
        }
      };

    case ADD_NEW_TASK_FAILURE:
      return {
        ...state,
        newTaskData: {
          ...state.newTaskData,
          loading: false,
          data: null,
          error:  payload ? payload : null,
        }
      };

    default:
      return state;
  }
}
