import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/Index';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <Index {...props} />} />
        <Route
          // exact
          path="/:author/:slug"
          render={props => <Detail {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
