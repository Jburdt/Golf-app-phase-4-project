import React, { useState } from 'react';

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(username, password, name)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        placeholder='Name'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <label htmlFor='username'>Username:</label>
      <input
        placeholder='Username'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      <label htmlFor='Password'>Password:</label>
      <input
        placeholder='Password'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up!</button>
    </form>
  )
}

export default SignupForm;