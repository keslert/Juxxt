import { createSelector } from 'reselect';
import { sortBy } from 'lodash';

export function getTasks(state) {
  return state.tasks;
}

export function getTaskList(state) {
  return getTasks(state).list;
}



//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getSortedTasks = createSelector(
  getTaskList,
  (tasks) => {
    return sortBy(tasks, t => (!t.repeat * 100000) + t.order);
  }
);