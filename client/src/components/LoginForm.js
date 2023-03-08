import React, { useState } from 'react';

  const LoginForm = ({toggleForm, user, setUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password }),
    })
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((data) => setUser(data))
  };

  return (
    <div className='auth-form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          placeholder='Username'
          id='username'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <label htmlFor="password">Password:</label>
        <input
          placeholder='Password'
          id='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
          <br />
          <button onClick={() => toggleForm("SignupForm")}>Don't have an account? Sign up here.</button>
    </form>
  </div>
  )
}

export default LoginForm;