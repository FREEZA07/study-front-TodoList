/**
 * 自定义组件 - 通用表单弹框
 * @since 2020-06-07
 * @author BUN
 */

import React, { useState, Fragment } from 'react';

import { Modal, Form, Button } from 'antd';

export default function FormModal(props) {

  const {
    FormItemList, // 表单字段列表
    description: text = '通用表单弹框',
    description: title = '通用表单弹框',
  } = props;
  const [visible, setVisible] = useState(0);

  /**
   * 弹框确认
   */ 
  function handleOk() {
    setVisible(0);
  }
  
  /**
   * 弹框取消
   */ 
  function handleCancel() {
    setVisible(0);
  }

  /**
   * 表单提交
   * @param {object} values 表单对象
   */
  function handleFinish(values) {
    const { submit } = props;
    new Promise(resolve => {
      submit(values);
      resolve();
    }).then(() => setVisible(0));
  };

  return (
    <Fragment>
      {/* 弹框呼出按钮 */}
      <Button
        type='primary'
        onClick={() => setVisible(1)}
      >
        {text}
      </Button>
      {/* 表单弹框区域 */}
      <Modal
        title={title}
        visible={visible}
        okText='确认'
        cancelText='取消'
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={handleFinish}>
          {FormItemList()}
        </Form>
      </Modal>
    </Fragment>
  );
}