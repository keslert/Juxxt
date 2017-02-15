import toastr from 'toastr';
import * as types from './action-types';
import { getTaskList } from './selectors';

export function createTask(task) {
  return (dispatch, getState) => {
    const tasks = getTaskList(getState());
    // taskList.push(Object.assign({}, task))
    //   .catch(error => dispatch(createTaskError(error)));
  };
}

export function createTaskError(error) {
  toastr.error(error);
  return {
    type: types.CREATE_TASK_ERROR,
    payload: error
  };
}

export function createTaskSuccess(task) {
  return {
    type: types.CREATE_TASK_SUCCESS,
    payload: task
  };
}