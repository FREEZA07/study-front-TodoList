/**
 * 日程表 - store
 * @since 2020-05-06
 * @author BUN
 */

import { createStore } from 'redux';

import reducer from './reducer';

const store = createStore(reducer);

export default store;