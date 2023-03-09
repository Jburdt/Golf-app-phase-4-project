import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';




const CourseCard = ({ course }) => {

  const courseData = {name: course.name,
  address: course.address,
  cost: course.cost,
  image: course.image,
  final_score: course.final_score}

  // Update Feature
  const handleUpdate = () => {
    console.log('Clicked')
    // fetch(`http://localhost:3000/courses/${course.id}`), {
    //   method: 'PATCH',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     courseData
    //   }),
    //   // .then(console.log(courseData))
    // }
  };


  return (
    <>
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
              <Card.Title>{course.name}</Card.Title>
              <Card.Text>{course.address}</Card.Text>
              <Card.Text>${course.cost}</Card.Text>
              <Button variant="primary">not needed yet</Button>{' '}
              <Button variant="secondary">not needed yet</Button>{' '}
              <Button variant="success">Book a Tee Time</Button>{' '}
              <Button onClick={handleUpdate} variant="warning">Edit</Button>{' '}
              <Button variant="danger">Delete</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default CourseCard;