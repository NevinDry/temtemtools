import authReducer from './authReducer';
import { combineReducers } from 'redux';
import temtemListReducer from './temtemListReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    temtemList: temtemListReducer
});

export default rootReducer;