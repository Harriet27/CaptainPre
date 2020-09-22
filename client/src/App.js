import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Pages';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
