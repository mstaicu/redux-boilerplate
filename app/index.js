import React from 'react';

import {
    render
} from 'react-dom';

import {
    Provider
} from 'react-redux';

import {
    createStore
} from 'redux';

import rootReducer from './reducers/rootReducer';

import HelloWorldContainer from './containers/HelloContainer/HelloContainer';

var appStore = createStore(rootReducer);

/**
import {
    sayHello
} from './actions/actions';

var unsubscribe = appStore.subscribe(function() {
    console.log(appStore.getState());
});

appStore.dispatch(
    sayHello(
        'Mircea'
    )
);
*/

render(
    <Provider store={appStore}>
        <HelloWorldContainer />
    </Provider>,
    document.getElementById('app')
);
