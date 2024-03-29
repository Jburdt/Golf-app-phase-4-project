import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';

// Sign up feature
const SignupForm = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      name,
        username,
        password
    }
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        user 
      ),
    })
      .then((r) => {
        if(r.ok) {
          r.json().then(setUser)
          history.push('/courses')
        } else {
          r.json().then((err) => {
            setErrors(err.errors)
          })
        }
      })
  };

  return (
    <div className="container"> 
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div>
          {errors.map((error, index) => {
          return <li key={index}>{error}!</li>
        })}
        </div>
    </Form>
  </div>
  )
}

export default SignupForm;