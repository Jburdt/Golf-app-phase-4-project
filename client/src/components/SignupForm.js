import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
      .then(data => console.log(data));
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="Name">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="Username">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="Password">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="PasswordConfirmation">
      <Form.Label>Password Confirmation</Form.Label>
      <Form.Control type="password" placeholder="Password Confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
    </Form.Group>
    <Form.Text className="text-muted">
          Please enter password again.
    </Form.Text>
    <br/>
    <Button variant="primary" type="submit">
      Sign up
    </Button>
  </Form>

    // <div className='auth-form-container'>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor='name'>Full Name:</label>
    //         <input
    //           id='name'
    //           placeholder='Full Name'
    //           type="text"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //           />
    //       <label htmlFor='username'>Username:</label>
    //         <input
    //           id='username'
    //           placeholder='Username'
    //           type="text"
    //           value={username}
    //           onChange={(e) => setUsername(e.target.value)}
    //           />
    //       <label htmlFor='password_confirmation'>Password:</label>
    //         <input
    //           id='password'
    //           placeholder='Password'
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           />
    //       <label>Password Confirmation:</label>
    //         <input
    //           id='password_confirmation'
    //           placeholder='Password Confimation'
    //           type="password"
    //           value={passwordConfirmation}
    //           onChange={(e) => setPasswordConfirmation(e.target.value)}
    //           />
    //           <button type="submit">Sign Up!</button>
    //             <button onClick={() => toggleForm("LoginForm")} type="button">Already have an account? Login here.</button>
    //   </form>
    // </div>
  )
}

export default SignupForm;