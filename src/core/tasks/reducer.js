import * as types from './action-types';
import { filter } from 'lodash';

const TasksState = () => ({
  filter: null,
  loaded: false,
  list: [],
  open: null,
});

export function tasksReducer(state = TasksState(), {payload, type}) {
  switch (type) {
    case types.CREATE_TASK_SUCCESS:
      return Object.assign({}, state, {
        list: state.list.push(payload),
        open: state.list.isEmpty() ? payload: null
      });

    case types.DELETE_TASK_SUCCESS:
      return Object.assign({}, state, {
        list: filter(state.list, task => task.key !== payload.key)
      });

    default: 
      return state;

  }
}