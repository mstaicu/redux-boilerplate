import React from 'react';
import { Route, Switch } from 'react-router-dom';

import retrieveComponent from '../utils/async';

import Home from '../components/Home/Home';

/**
  Async load of splitted chunks
*/
var FourOhFour = retrieveComponent(function() {
  return import('../components/FourOhFour/FourOhFour');
});

export default function() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={FourOhFour} />
    </Switch>
  );
}
