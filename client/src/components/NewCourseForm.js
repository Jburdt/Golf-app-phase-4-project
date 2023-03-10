import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const NewCourseForm = () => {
  return (
    <Form>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Course Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Course
      </Button>

  </Form>
  )
}

export default NewCourseForm;