import { combineReducers } from 'redux';

import temtemListReducer from './temtemListReducer';
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    temtemList: temtemListReducer,
    firestore: firestoreReducer
});

export default rootReducer;