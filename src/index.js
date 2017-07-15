import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

import Routes from './routes';

var sagaMiddleware = createSagaMiddleware(),
  appStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

// import { getNiceError } from './actions/actions';
//
// var unsubscribe = appStore.subscribe(function() {
//   console.log(appStore.getState());
// });
//
// appStore.dispatch(getNiceError());

function renderApp() {
  render(
    <Provider store={appStore}>
      <Routes />
    </Provider>,
    document.getElementById('app'),
  );
}

renderApp();

module.hot && module.hot.accept('./routes', renderApp);
