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

import HelloWorld from './components/Hello/World';

render(
    <HelloWorld />,
    document.getElementById('app')
);
