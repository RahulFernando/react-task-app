import { ADD_NEW_TASK_FAILURE, ADD_NEW_TASK_START, ADD_NEW_TASK_SUCCESS, FETCH_TASK_LIST_START, FETCH_TASK_LIST_SUCCESS, FETCH_TASK_LIST_FAILURE, SELECT_TASK } from "./constants";

export const addNewTaskStart = (payload: string) => ({
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