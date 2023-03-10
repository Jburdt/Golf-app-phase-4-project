import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import Button from 'react-bootstrap/Button';
import NewCourseForm from './NewCourseForm';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  // Gets all the courses from backend
  useEffect(() => {
    fetch("/courses")
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setCourses(data))
    .catch(error => console.log(error))
  }, []);

  const renderNewForm = () => {
     <NewCourseForm />
  };

  return (
    <>
      <h3>Below are the courses available to play.</h3>
        <a href='/NewCourseForm'> 
          <Button onClick={() => renderNewForm} variant="primary" size="lg">
            Add new course
          </Button>
        </a>
      { courses.map((course) => <CourseCard course={course} key={course.id} />)}
    </>
  )
}

export default CourseList;