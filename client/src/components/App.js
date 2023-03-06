import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import SignupForm from './SignupForm';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/Login">
          <LoginForm />
        </Route>
        <Route path="*">
          <h1>400 Page not found</h1>
        </Route>
      </Switch>
    </div>
  )
};

export default App;