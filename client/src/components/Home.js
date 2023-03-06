import React from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Home = () => {
  return (
    <h1>Welocme To How'd Ya Golf!
      <p>
        Login in below or signup!
      </p>
      <LoginForm/>
      <SignupForm/>
    </h1>
  )
}

export default Home;