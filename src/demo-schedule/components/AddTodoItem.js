/**
 * 日程表 - 添加待办事项
 * 日程表 - AddTdoItem
 * @since 2020-07-04
 * @author BUN
 */

import React, { Fragment } from 'react';

import { todoAdd } from '../store/actionCreator';

import { getDate } from '../../common/Utils';

import FormModal from '../../components/FormModal';
import { FormItemText, FormItemNumber } from '../../components/FormItem';

import {
  Button,
} from 'antd';

// 添加待办事项（表单元素）
function FormItemList() {

  function itemLayout() {
    return ({
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    });
  }
  return (
    <Fragment>
      {FormItemNumber(
        {
          name: 'sequence',
          label: '序号',
          ...itemLayout(),
        },
        {
          style: { width: '100%' }
        }
      )}
      {FormItemText(
        {
          name: 'level',
          label: '优先级',
          ...itemLayout(),
        }
      )}
      {FormItemText(
        {
          name: 'todoItem',
          label: '待办事项',
          ...itemLayout(),
        }
      )}
      <Button htmlType='submit'>提交</Button>
    </Fragment>
  );
}

// 添加待办事项（表单组件）
export default function AddTodoItem(props) {
  const FormModalProps = {
    description: '添加待办事项表单',
    FormItemList,
    submit: (values) => {
      props.store.dispatch(todoAdd({
        ...values,
        creationDate: getDate(),
      }));
    }
  };

  return <FormModal {...FormModalProps} />;
}