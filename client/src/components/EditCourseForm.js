import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

const EditCourseForm = ({ courses, editCourse }) => {
  const {id} = useParams()
  const history = useHistory()
  const [name, setName] = useState()
  const [address, setAddress] = useState()
  const [cost, setCost] = useState()
  const [image, setImage] = useState()
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if ( courses.length > 0) {
      const updatedCourse = courses.find(course => course.id === parseInt(id), 10)
      console.log("updatedCourse", updatedCourse)
    }
  }, [courses])

  const handleSubmit = (e) => {
    e.preventDefault()
    
   const editCourse = {
    name, 
    address, 
    cost, 
    image
   }

    fetch(`/courses/${id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editCourse)
    })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          editCourse(data)
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
        Edit <Badge bg="primary">Course</Badge>
      </h1>
  
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Course Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Name" 
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Address"
        defaultValue={address}
        onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control 
        type="number" 
        placeholder="Cost" 
        defaultValue={cost}
        onChange={(e) => setCost(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Image">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Image" 
        defaultValue={image}
        onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Course
      </Button>

      <div>{errors.map((error, index) => {
        return <li key={index}>{error}!</li>
      })}</div>
  </Form>
  )
}

export default EditCourseForm;