import React from 'react';

import {
    render
} from 'react-dom';

import {
    Provider
} from 'react-redux';

import {
    createStore,
    applyMiddleware
} from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/sagas';

import HelloWorldContainer from './containers/HelloContainer/HelloContainer';

var sagaMiddleware = createSagaMiddleware(),
    appStore = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(rootSaga);

/**
import {
    getNiceError
} from './actions/actions';

var unsubscribe = appStore.subscribe(function() {
    console.log(appStore.getState());
});

appStore.dispatch(getNiceError());
**/

render(
    <Provider store={appStore}>
        <HelloWorldContainer />
    </Provider>,
    document.getElementById('app')
);
