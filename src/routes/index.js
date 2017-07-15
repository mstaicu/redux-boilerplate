import React from 'react';
import { Route, Switch } from 'react-router-dom';

import loadAsyncComponent from '../utils/async';

import Home from '../components/Home/Home';
import FourOhFour from '../components/FourOhFour/FourOhFour';

import Fooo from '../components/Foo';

var Foo = loadAsyncComponent(function() {
  return import('../components/Foo');
});

export default function() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/foo" component={Fooo} />
      <Route component={FourOhFour} />
    </Switch>
  );
}
