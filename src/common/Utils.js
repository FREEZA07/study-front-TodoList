/**
 * 工具函数集
 * @since 2020-06-14
 * @author BUN
 */

/**
 * 获取当前日期（年月日时分秒）
 */
export function getDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.toLocaleTimeString()}`;
};

/**
 * 获取当前日期（年月日）
 */
export function getDateTime() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};