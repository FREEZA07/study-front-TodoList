/**
 * 日程表 - 待办列表
 * 日程表 - TodoList
 * @since 2020-05-06
 * @author BUN
 */

import React, { useState, Fragment } from 'react';

import { Table } from 'antd';

import {
  todoFinish,
  todoDelete,
} from '../store/actionCreator';

import {
  getDate,
} from '../../common/Utils';

import {
  submitConfirm,
  deleteConfirm,
} from '../../components/CustomModal';

export default function TodoList(props) {

  /**
   * 完成待办事项
   * @param {object} store  状态管理库
   * @param {object} record 待办事项对象（附加完成时间）
   */
  function handleFinish(store = {}, record) {
    store.dispatch(todoFinish({
      ...record,
      completionDate: getDate(),
    }));
  }

  /**
   * 删除待办事项
   * @param {object} store  状态管理库
   * @param {object} record 待办事项对象
   */
  function handleDelete(store = {}, record) {
    store.dispatch(todoDelete(record));
  }

  const { store } = props;
  const { todoList } = props.store.getState();
  const [dataSource, setDataSource] = useState(todoList);

  // 监听数据变化
  store.subscribe(() => {
    setDataSource(store.getState().todoList);
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
      title: '创建时间',
      dataIndex: 'creationDate',
    },
    {
      align: 'center',
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          <Fragment>
            <span
              onClick={() => submitConfirm(() => handleFinish(store, record))}
              style={{ marginRight: 5}}
            >
              完成
            </span>
            <span
              onClick={() => deleteConfirm(() => handleDelete(store, record))}
              style={{ marginLeft: 5}}
            >
              删除
            </span>
          </Fragment>
        )
      }
    }
  ];

  return (
    <div id="schedule-todoList">
      <p>待办事项列表</p>
      <Table
        bordered
        rowKey='sequence'
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}

