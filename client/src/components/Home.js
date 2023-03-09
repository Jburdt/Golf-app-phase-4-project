import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Home = ({ user, setUser}) => {
  const [currentForm, setCurrentForm] = useState("LoginForm");

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  };

  return (
    <> 
      <h1>Welcome to Golf Buddy!</h1>
      <p> Join a community of golfers!</p>
      <div>{ currentForm === "LoginForm" ? <LoginForm user={user} setUser={setUser} toggleForm={toggleForm} />  : <SignupForm toggleForm={toggleForm} /> }</div>
    </>
  )
}

export default Home;