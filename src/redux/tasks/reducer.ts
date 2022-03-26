import { IAction } from '../../types/reducer';
import {
  ADD_NEW_TASK_FAILURE,
  ADD_NEW_TASK_START,
  ADD_NEW_TASK_SUCCESS,
  FETCH_TASK_LIST_FAILURE,
  FETCH_TASK_LIST_START,
  FETCH_TASK_LIST_SUCCESS,
  SELECT_TASK,
} from './constants';

const init = {
  newTaskData: {
    loading: false,
    data: null,
    error: null,
  },
  taskListData: {
    loading: false,
    data: [],
    error: null,
  },
  selectedTask: null,
};

export default function tasks(state = init, { type, payload }: IAction) {
  switch (type) {
    case ADD_NEW_TASK_START:
      return {
        ...state,
        newTaskData: {
          ...state.newTaskData,
          loading: true,
        },
      };

    case ADD_NEW_TASK_SUCCESS:
      return {
        ...state,
        newTaskData: {
          ...state.newTaskData,
          loading: false,
          data: payload ? payload : null,
          error: null,
        },
      };

    case ADD_NEW_TASK_FAILURE:
      return {
        ...state,
        newTaskData: {
          ...state.newTaskData,
          loading: false,
          data: null,
          error: payload ? payload : null,
        },
      };

    case FETCH_TASK_LIST_START:
      return {
        ...state,
        taskListData: {
          ...state.taskListData,
          loading: true,
        },
      };

    case FETCH_TASK_LIST_SUCCESS:
      return {
        ...state,
        taskListData: {
          ...state.taskListData,
          loading: false,
          data: payload ? payload : [],
          error: null,
        },
      };

    case FETCH_TASK_LIST_FAILURE:
      return {
        ...state,
        taskListData: {
          ...state.taskListData,
          loading: false,
          data: [],
          error: payload ? payload : null,
        },
      };

    case SELECT_TASK:
      return {
        ...state,
        selectedTask: payload,
      };

    default:
      return state;
  }
}
