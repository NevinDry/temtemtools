import { combineReducers } from 'redux';

import temtemListReducer from './temtemListReducer';
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';
import temtemReducer from './temtemReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    temtemList: temtemListReducer,
    temtem: temtemReducer,
    firestore: firestoreReducer
});

export default rootReducer;