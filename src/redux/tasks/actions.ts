import { ADD_NEW_TASK_FAILURE, ADD_NEW_TASK_START, ADD_NEW_TASK_SUCCESS, FETCH_TASK_LIST_START, FETCH_TASK_LIST_SUCCESS, FETCH_TASK_LIST_FAILURE, SELECT_TASK, RESET_SELECT_TASK, UPDATE_TASK_START, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAILURE, DELETE_TASK_START, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE, RESET_DELETE_TASK } from "./constants";

export const addNewTaskStart = (payload: ITask) => ({
    type: ADD_NEW_TASK_START,
    payload,
});

export const addNewTaskSuccess = (payload: ITask) => ({
    type: ADD_NEW_TASK_SUCCESS,
    payload,
});

export const addNewTaskFailure = (payload: string) => ({
    type: ADD_NEW_TASK_FAILURE,
    payload,
});

export const fetchTaskListStart = () => ({
    type: FETCH_TASK_LIST_START,
});

export const fetchTaskListSuccess = (payload: Array<ITask>) => ({
    type: FETCH_TASK_LIST_SUCCESS,
    payload,
});

export const fetchTaskListFailure = (payload: string) => ({
    type: FETCH_TASK_LIST_FAILURE,
    payload,
});

export const selectTask = (payload: ITask) => ({
    type: SELECT_TASK,
    payload,
});

export const resetSelectTask = () => ({
    type: RESET_SELECT_TASK,
});

export const updateTaskStart = (payload: ITask) => ({
    type: UPDATE_TASK_START,
    payload,
});

export const updateTaskSuccess = (payload: ITask) => ({
    type: UPDATE_TASK_SUCCESS,
    payload,
});

export const updateTaskFailure = (payload: string) => ({
    type: UPDATE_TASK_FAILURE,
    payload,
});

export const deleteTaskStart = (payload: any) => ({
    type: DELETE_TASK_START,
    payload,
});

export const deleteTaskSuccess = (payload: string) => ({
    type: DELETE_TASK_SUCCESS,
    payload,
});

export const deleteTaskFailure = (payload: string) => ({
    type: DELETE_TASK_FAILURE,
});

export const resetDeleteTask = () => ({
    type: RESET_DELETE_TASK,
});