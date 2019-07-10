import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebaseConfig from './firebaseConfig'
import App from './components/app/App';
import logger from 'redux-logger';

const middleware = [
    thunk.withExtraArgument({ getFirestore }),
    logger
];

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(...middleware),
        reduxFirestore(firebaseConfig)
));

ReactDOM.render(
<Provider store={store}>
    <ReactReduxFirebaseProvider
        firebase={firebaseConfig}
        config={firebaseConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <App />
    </ReactReduxFirebaseProvider>

</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
