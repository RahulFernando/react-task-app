import { IAction } from '../../types/reducer';
import {
  ADD_NEW_TASK_FAILURE,
  ADD_NEW_TASK_START,
  ADD_NEW_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_START,
  DELETE_TASK_SUCCESS,
  FETCH_TASK_LIST_FAILURE,
  FETCH_TASK_LIST_START,
  FETCH_TASK_LIST_SUCCESS,
  RESET_DELETE_TASK,
  RESET_SELECT_TASK,
  SELECT_TASK,
  UPDATE_TASK_FAILURE,
  UPDATE_TASK_START,
  UPDATE_TASK_SUCCESS,
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
  updateTaskData: {
    loading: false,
    data: null,
    error: null,
  },
  deleteTaskData: {
    loading: false,
    data: null,
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

    case UPDATE_TASK_START:
      return {
        ...state,
        updateTaskData: {
          ...state.updateTaskData,
          loading: true,
        },
      };

    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        updateTaskData: {
          ...state.updateTaskData,
          loading: false,
          data: payload ? payload : null,
          error: null,
        },
      };

    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        updateTaskData: {
          ...state.updateTaskData,
          loading: false,
          data: null,
          error: payload ? payload : null,
        },
      };

    case DELETE_TASK_START:
      return {
        ...state,
        deleteTaskData: {
          ...state.deleteTaskData,
          loading: true,
        },
      };

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        deleteTaskData: {
          ...state.deleteTaskData,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case DELETE_TASK_FAILURE:
      return {
        ...state,
        deleteTaskData: {
          ...state.deleteTaskData,
          loading: false,
          data: null,
          error: payload,
        },
      };

    case RESET_DELETE_TASK:
      return {
        ...state,
        deleteTaskData: init.deleteTaskData
      };

    case SELECT_TASK:
      return {
        ...state,
        selectedTask: payload,
      };

    case RESET_SELECT_TASK:
      return {
        ...state,
        selectedTask: init.selectedTask,
      };

    default:
      return state;
  }
}
