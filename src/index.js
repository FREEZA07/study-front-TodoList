import React from 'react';

import ReactDOM from 'react-dom';

import Schedule from './demo-schedule'; //            demo - 日程表
import ScheduleStore from './demo-schedule/store' //  demo - 日程表（store）

// 组件渲染入口
ReactDOM.render(
  <Schedule store={ScheduleStore} />,
  document.getElementById('root')
);

