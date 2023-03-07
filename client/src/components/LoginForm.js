import React, { useEffect, useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null);

useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);
  
    // if (!user) return <Login onLogin={setUser} />;

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
    .then(() => setUser)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        placeholder='Username'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
       <label htmlFor="password">Password:</label>
      <input
        placeholder='password'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <br />
        <button>Don't have an account? Sign up here.</button>
  </form>
  )
}

export default LoginForm;