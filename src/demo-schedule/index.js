/**
 * 日程表 - 主界面
 * 日程表 - Schedule
 * @since 2020-05-06
 * @author BUN
 */

import React from 'react';

import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import AddTodoItem from './components/AddTodoItem';

import './style.css';

export default function Schedule(props) {

  return (
    <div id="schedule">

      <header id="schedule-header">
        {/* 添加待办事项表单 */}
        <AddTodoItem {...props} />
      </header>

      <div id='schedule-content'>
        {/* 代办事项列表 */}
        <TodoList {...props} />
        {/* 完成事项列表 */}
        <DoneList {...props} />
      </div>

    </div>
  );
}

