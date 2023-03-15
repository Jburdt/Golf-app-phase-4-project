import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, deletedCourse }) => {

  const handleDelete = () => {
    fetch(`/courses/${course.id}`, {
      method:"DELETE"
    })
    .then((data) => deletedCourse(course.id))
  };

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue',
    backgroundColor: 'orange',
    padding: 8,
    margin: .5,
    borderRadius: 5
    
  };

  return (
    <>
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
              <Card.Title>{course.name}</Card.Title>
              <Card.Text>{course.address}</Card.Text>
              <Card.Text>${parseFloat(course.cost).toFixed(2)}</Card.Text>
              <Button variant="primary">not needed yet</Button>{' '}
              <Button variant="secondary">not needed yet</Button>{' '}
              <Button variant="success">Book a Tee Time</Button>{' '}
              <Link style={linkStyle} to={`/courses/${course.id}/edit`}>Edit</Link>{' '}
              <Link style={linkStyle} to="/courses" onClick={() => {handleDelete(course.id)}} variant="danger">Delete</Link>{' '}
            </Card.Body>
          </Card>
          <hr/>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default CourseCard;