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
    <input
      placeholder='Username'
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
    <input
      placeholder='Password'
      type="text"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
  </form>
  )
}

export default LoginForm;