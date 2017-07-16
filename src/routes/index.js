import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home/Home';
import FourOhFour from '../components/FourOhFour/FourOhFour';

export default function() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={FourOhFour} />
    </Switch>
  );
}
