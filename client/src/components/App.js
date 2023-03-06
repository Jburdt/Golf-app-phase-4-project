import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>400 Page not found</h1>
        </Route>
      </Switch>
    </div>
  )
};

export default App;