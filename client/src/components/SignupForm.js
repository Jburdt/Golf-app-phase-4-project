import React, { useState } from 'react';

const SignupForm = ({toggleForm}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      // .then(onLogin);
  };

  return (
    <div className='auth-form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Full Name:</label>
        <input
          id='name'
          placeholder='Full Name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        <label htmlFor='username'>Username:</label>
        <input
          id='username'
          placeholder='Username'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <label htmlFor='password_confirmation'>Password:</label>
        <input
          id='password_confirmation'
          placeholder='Password'
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        <input
          id='password'
          placeholder='Password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up!</button>
          <button onClick={() => toggleForm("LoginForm")} type="button">Already have an account? Login here.</button>
      </form>
    </div>
  )
}

export default SignupForm;