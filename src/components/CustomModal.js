/**
 * 自定义组件 - 通用提示框
 * @since 2020-06-07
 * @author BUN
 */

// import React from 'react';
import { Modal } from 'antd';

/**
 * 提交提示框
 * @param {function} handleOk 回调函数
 */
export function submitConfirm(handleOk) {
  return (
    Modal.warning({
      title: '',
      content: '确认提交选中数据？',
      okText: '确认',
      cancelText: '取消',
      onOk: handleOk,
    })
  );
};

/**
 * 删除提示框
 * @param {function} handleOk 回调函数
 */
export function deleteConfirm(handleOk) {
  return (
    Modal.error({
      title: '',
      content: '确认删除选中数据？',
      okText: '确认',
      cancelText: '取消',
      onOk:handleOk,
    })
  );
};

