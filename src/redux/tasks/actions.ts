import { ADD_NEW_TASK_FAILURE, ADD_NEW_TASK_START, ADD_NEW_TASK_SUCCESS } from "./constants";

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