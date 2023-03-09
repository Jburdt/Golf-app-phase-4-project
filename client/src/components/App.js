import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import CourseList from './CourseList';
import Home from './Home';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import SignupForm from './SignupForm';


const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me")
    .then(resp => resp.json())
    // some logic here 
    .then(setUser)
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home user={user} setUser={setUser} />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/Login">
          <LoginForm user={user} setUser={setUser} />
        </Route>
        <Route path="/courses">
          <CourseList />
        </Route>
        <Route path="*">
          <h1>400 Page not found</h1>
        </Route>
      </Switch>
    </div>
  )
};

export default App;