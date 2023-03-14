import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { useHistory } from 'react-router-dom';

const NewCourseForm = ({ addCourse }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault()

    const newCourse = { 
      name: name,
      address: address,
      cost: cost,
      image: image
    }

    fetch('/courses', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCourse)
    })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          addCourse(data)
        history.push('/courses')})
      }
      else {
      response.json().then((err) => {
        setErrors(err.errors)
      })
    }
  })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>
        Add New <Badge bg="primary">Course</Badge>
      </h1>
  
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Course Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control 
        type="number" 
        placeholder="Cost" 
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Image">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Image" 
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Course
      </Button>

      <div>{errors.map((error, index) => {
        return <li key={index}>{error}!</li>
      })}</div>
  </Form>
  )
}

export default NewCourseForm;