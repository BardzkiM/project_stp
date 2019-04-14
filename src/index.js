import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { reducer } from "./reducers";
import { watcherSaga } from "./sagas/watchersSaga";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(watcherSaga);

const connectedComponent = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(connectedComponent, document.getElementById('root'));
serviceWorker.unregister();
