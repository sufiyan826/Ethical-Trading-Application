import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../Store/Reducers/AuthReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
