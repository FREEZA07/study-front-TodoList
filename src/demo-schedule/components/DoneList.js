/**
 * 日程表 - 完成列表
 * 日程表 - DoneList
 * @since 2020-05-06
 * @author BUN
 */
import React from 'react';
import { useState } from 'react';

import { Table } from 'antd';

// 完成列表列表
export default function DoneList(props) {

  const { store } = props;
  const { doneList } = props.store.getState();
  const [dataSource, setDataSource] = useState(doneList);

  // 监听数据变化
  store.subscribe(() => {
    setDataSource(store.getState().doneList);
  });

  const columns = [
    {
      title: '序号',
      dataIndex: 'sequence',
    },
    {
      title: '优先级',
      dataIndex: 'level',
    },
    {
      title: '待办事项',
      dataIndex: 'todoItem',
    },
    {
      title: '完成时间',
      dataIndex: 'completionDate',
    },
  ];

  return (
    <div id="schedule-doneList">
      <p>完成事项列表</p>
      <Table
        rowKey='sequence'
        bordered
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}

