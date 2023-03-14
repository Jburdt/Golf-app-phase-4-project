import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

const EditCourseForm = ({ courses, editCourse }) => {
  const {id} = useParams();
  const history = useHistory();
  const [errors, setErrors] = useState([])
  
  const initialState = {
    name: '',
    address: '',
    cost: '',
    image: ''
  }

  const [formData, setFormData] = useState(initialState)

  useEffect(() => {
    if ( courses.length > 0) {
      const updatedCourse = courses.find(course => course.id === parseInt(id), 10)
      console.log("Delete me line 23 edit course form", updatedCourse)
      setFormData({
        name: updatedCourse.name,
        address: updatedCourse.address,
        cost: updatedCourse.cost,
        image: updatedCourse.image
      })
    }
  }, [courses])

  const handleChange = (e) => {
    const { name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/courses/${id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setFormData(data)
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
        name='name'
        placeholder="Enter Name" 
        value={formData.name}
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control 
        type="text" 
        name='address'
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Cost">
        <Form.Label>Cost</Form.Label>
        <Form.Control 
        type="number" 
        name='cost'
        placeholder="Cost" 
        value={formData.cost}
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Image">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type="text" 
        name='image'
        placeholder="Image" 
        value={formData.image}
        onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Course
      </Button>

      {<div>{errors.map((error, index) => {
        return <li key={index}>{error}!</li>
      })}</div> }
  </Form>
  )
}

export default EditCourseForm;