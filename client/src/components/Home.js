import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Home = () => {

  const [currentForm, setCurrentForm] = useState("login");

  return (
    <> 
      <h1>Welocme To How'd Ya Golf!</h1>
      <p> Log in below or Sign up!</p>
      <div>{ currentForm === "login" ? <LoginForm />  : <SignupForm /> }</div>
    </>
  )
}

export default Home;