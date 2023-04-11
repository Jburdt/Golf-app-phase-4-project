import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const CourseCard = ({ course, deletedCourse }) => {
  const history = useHistory();

  const toTimeForm = (id) => {
    history.push(`/courses/${id}/tee-time`)
  };

  // DELETES COURSE 
  const handleDelete = () => {
    fetch(`/courses/${course.id}`, {
      method:"DELETE"
    })
    .then(deletedCourse(course.id))
  };

  // EDIT BUTTONG STYLING
  const linkStyle = {
    color: 'white',
    backgroundColor: 'orange',
    padding: 9,
    margin: .1,
    borderRadius: 5,
    paddingBottom: 11,
    paddingTop: 8
  };

  const deleteLinkStyle = {
    color: 'white',
    backgroundColor: 'red',
    padding: 9,
    margin: .1,
    borderRadius: 5,
    paddingBottom: 11,
    paddingTop: 8
  };

  return (
    <div className="container">
      <Row xs={1} md={1} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={course.image} />
                  <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>{course.address}</Card.Text>
                    <Card.Text>${parseFloat(course.cost).toFixed(2)}</Card.Text>
                    <Button onClick={() => toTimeForm(course.id)} variant="success">Book a Tee Time</Button>{' '}
                    <Link style={linkStyle} to={`/courses/${course.id}/edit`}>Edit</Link>{' '}
                    <Link style={deleteLinkStyle} to="/courses" onClick={() => {handleDelete(course.id)}} variant="danger">Delete</Link>{' '}
                  </Card.Body>
                    <ListGroup>
                      { course.tee_times.map(time => <ListGroup.Item key={time.id}>{time.time_format} COURSECARD LINE 61</ListGroup.Item>) }
                    </ListGroup>
            </Card>
            <hr/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CourseCard;