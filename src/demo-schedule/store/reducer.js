/**
 * 日程表 - reducer
 * @since 2020-05-06
 * @author BUN
 */

/**
 * 初始状态
 */
const defaultState = {
    todoList: [], // 待办事项列表
    doneList: [], // 完成事项列表

    currentTodoItem: {}, // 待办列表当前操作行
    currentDoneItem: {}, // 完成列表当前操作行
};

/**
 * reducer
 * @param {object} state  状态 
 * @param {object} action 动作
 */
export default function reducer(state = defaultState, action = {}) {

  // 添加待办事项
  if(action.type === 'TODO_ADD') {
    const newTodoList = [
      ...state.todoList,
      action.payload,
    ];
    return ({
      ...state,
      todoList: newTodoList,
    });
  };

  /**
   * 删除待办事项
   * 创建时间作为唯一性标识
   */ 
  if(action.type === 'TODO_DELETE') {
    const newTodoList = state.todoList.filter(item => item.creationDate !== action.payload.creationDate);
    return ({
      ...state,
      todoList: newTodoList,
    });
  };

  /**
   * 完成待办事项
   * 创建时间作为唯一性标识
   */ 
  if(action.type === 'TODO_FINISH') {
    const newTodoList = state.todoList.filter(item => item.creationDate !== action.payload.creationDate);
    const newDoneList = [
      ...state.doneList,
      action.payload,
    ];
    return ({
      ...state,
      todoList: newTodoList,
      doneList: newDoneList,
    });
  };

  return state;
}