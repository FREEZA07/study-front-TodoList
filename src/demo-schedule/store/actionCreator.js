/**
 * 日程表 - actionCreate
 * @since 2020-05-06
 * @author BUN
 */

import * as actionTypsList from './actionType';

/**
 * 添加待办事项action
 * todoFinish
 * @param {*} val 
 */
export function todoAdd(val) {
  return {
    type: actionTypsList.TODO_ADD,
    payload: val,
  }
}

/**
 * 完成待办事项action
 * todoFinish
 * @param {*} val 
 */
export function todoFinish(val) {
  return {
    type: actionTypsList.TODO_FINISH,
    payload: val,
  }
}

/**
 * 删除待办事项action
 * todoDelete
 * @param {*} val 
 */
export function todoDelete(val) {
  return {
    type: actionTypsList.TODO_DELETE,
    payload: val,
  }
}

