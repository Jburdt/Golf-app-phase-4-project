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
      <h1>Welcome to Golf buddy!</h1>
      <p> Log in below or Sign up!</p>
      <div>{ currentForm === "LoginForm" ? <LoginForm user={user} setUser={setUser} toggleForm={toggleForm} />  : <SignupForm toggleForm={toggleForm} /> }</div>
    </>
  )
}

export default Home;