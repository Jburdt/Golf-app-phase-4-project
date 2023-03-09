import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

  const LoginForm = ({ user, setUser }) => {
    const history = useHistory("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password }),
    })
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
        history.push('/courses')})
      }
      else {
      response.json().then((err) => {
        setErrors(err.errors)
      })
    }
  });
}

  return (
    <div className='auth-form-container'>
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter username" 
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log in
      </Button>
      <div>
        { errors }
      </div>
    </Form>
  </div>
  )
}

export default LoginForm;