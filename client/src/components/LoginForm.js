import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

  const LoginForm = ({ toggleForm, user, setUser }) => {
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
    .then((user) => setUser(user))
  };

  return (
    <div className='auth-form-container'>
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter username" 
        // id='username'
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password"
        // id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Log in
      </Button>
    </Form>

      {/* <form onSubmit={handleSubmit}>
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
    </form> */}
  </div>
  )
}

export default LoginForm;