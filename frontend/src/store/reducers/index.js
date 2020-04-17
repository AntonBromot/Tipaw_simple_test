import { combineReducers } from 'redux';
import message from './messageReducer';

const rootReducer = combineReducers({ message })

export default rootReducer;
