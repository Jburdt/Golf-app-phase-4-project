import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import CourseList from './CourseList';
import EditCourseForm from './EditCourseForm';
import Home from './Home';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import NewCourseForm from './NewCourseForm';
import SignupForm from './SignupForm';
import TimeForm from './TimeForm';

const App = () => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [courses, setCourses] = useState([]);

  // DELETE COURSE FUNCTION 
  const deletedCourse = (id) => {
    const restOfCourses = courses.filter(course => course.id !== id)
    setCourses(restOfCourses)
  };

  // EDIT COURSE FUNCTION 
  const editCourse = (editedCourse) => {
    const updatedCourse = courses.map(course => {
      if (editedCourse.id === course.id) {
        return editedCourse
      } else {
        return course
      }
    })
    setCourses(updatedCourse)
  };

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

        <Route exact path="/signup">
          <SignupForm user={user} setUser={setUser} />
        </Route>

        <Route exact path="/Login">
          <LoginForm user={user} setUser={setUser} />
        </Route>

        <Route exact path="/courses">
          <CourseList deletedCourse={deletedCourse} courses={courses} />
        </Route>

        <Route exact path="/courses/new">
          <NewCourseForm addCourse={addCourse}/>
        </Route>

        <Route exact path="/courses/:id/edit">
          <EditCourseForm courses={courses} editCourse={editCourse} />
        </Route>

        <Route exact path="/golfer/tee-time">
          <TimeForm />
        </Route>

        <Route path="*">
          <h1>404 Page not found</h1>
        </Route>

      </Switch>
    </div>
  )
};

export default App;