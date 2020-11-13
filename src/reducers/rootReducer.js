import number from './number';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  number: number,
});

export default rootReducer;
