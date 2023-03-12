import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import CourseList from './CourseList';
import Home from './Home';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import NewCourseForm from './NewCourseForm';
import SignupForm from './SignupForm';

const App = () => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/me")
    .then(resp => resp.json())
    .then(user => {setUser(user)
      setLoggedIn(true)})
  }, []);

    // Add new course
    const addCourse = (newCourse) => {
      setCourses([newCourse, ...courses])
    };
  
    // Gets all the courses from backend
    useEffect(() => {
      fetch("/courses")
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setCourses(data))
      .catch(error => console.log(error))
    }, []);

  return (
    <div>
      <Navbar setUser={setUser} user={user} />
      <Switch>

        <Route exact path="/">
          <Home user={user} setUser={setUser} />
        </Route>

        <Route path="/signup">
          <SignupForm user={user} setUser={setUser} />
        </Route>

        <Route path="/Login">
          <LoginForm user={user} setUser={setUser} />
        </Route>

        <Route path="/courses">
          <CourseList courses={courses} />
        </Route>

        <Route path="/NewCourseForm">
          <NewCourseForm addCourse={addCourse}/>
        </Route>

        <Route path="*">
          <h1>400 Page not found</h1>
        </Route>

      </Switch>
    </div>
  )
};

export default App;