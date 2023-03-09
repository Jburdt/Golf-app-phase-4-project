import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const CourseList = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch("/courses")
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setCourses(data))
    .catch(error => console.log(error))
  }, []);

  return (
    <>
      <h3>Below are the courses available to play.</h3>
      { courses.map((course) => <CourseCard course={course} key={course.id} />)}
    </>
  )
}

export default CourseList;