import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HelloWorldContainer from '../containers/HelloContainer/HelloContainer';

export default function() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact component={HelloWorldContainer} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}
