/**
 * 自定义组件 - 通用表单元素
 * @since 2020-06-07
 * @author BUN
 */

import React from 'react';

import {
  Form,
  Input,
  Select,
  InputNumber,
} from 'antd';

/**
 * 表单文本输入框
 * @param {*} itemProps 
 * @param {*} props 
 */
export function FormItemText(itemProps, props) {
  const {
    name='表单文本输入框',
    label='表单文本输入框',
  } = itemProps;
  return (
    <Form.Item
      name={name}
      label={label}
      {...itemProps}
    >
      <Input {...props} />
    </Form.Item>
  );
}

/**
 * 表单密码输入框（普通显示）
 * @param {*} itemProps 
 * @param {*} props 
 */
export function FormItemPwd1(itemProps, props) {
  const {
    name='表单密码输入框（普通显示）',
    label='表单密码输入框（普通显示）',
  } = itemProps;
  return (
    <Form.Item
      name={name}
      label={label}
      {...itemProps}
    >
      <Input type='Password' {...props} />
    </Form.Item>
  );
}

/**
 * 表单密码输入框（切换显示）
 * @param {*} itemProps 
 * @param {*} props 
 */
export function FormItemPwd2(itemProps, props) {
  const {
    name='表单密码输入框（切换显示）',
    label='表单密码输入框（切换显示）',
  } = itemProps;
  return (
    <Form.Item
      name={name}
      label={label}
      {...itemProps}
    >
      <Input.Password {...props} />
    </Form.Item>
  );
}

/**
 * 表单数字输入框
 * @param {*} itemProps 
 * @param {*} props 
 */
export function FormItemNumber(itemProps, props) {
  const {
    name='表单数字输入框',
    label='表单数字输入框',
  } = itemProps;
  return (
    <Form.Item
      name={name}
      label={label}
      {...itemProps}
    >
      <InputNumber {...props} />
    </Form.Item>
  );
}

/**
 * 表单下拉选择框
 * @param {*} itemProps 
 * @param {*} props 
 */
export function FormItemSelect(itemProps, props) {
  const {
    name='表单下拉选择框',
    label='表单下拉选择框',
  } = itemProps;
  const { optionList = [], ...otherProps } = this.props;
  return (
    <Form.Item
      name={name}
      label={label}
      {...itemProps}
    >
      <Select {...otherProps}>
        {optionList.map(item => {
          return <Select.Option>1</Select.Option>;
        })}
      </Select>
    </Form.Item>
  );
}