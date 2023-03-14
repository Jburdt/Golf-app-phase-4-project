import CourseCard from './CourseCard';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const CourseList = ({ courses, editCourse, deleteCourse }) => {
  const history = useHistory();

  const renderNewForm = () => {
     history.push(`/courses/new`)
  };

  return (
    <>
      <h3>Below are the courses available to play.</h3>
          <Button onClick={() => renderNewForm()} variant="primary" size="lg">
            Add new course
          </Button>
      { courses.map((course) => <CourseCard editCourse={editCourse} courses={courses} deleteCourse={deleteCourse} course={course} key={course.id} />)}
    </>
  )
}

export default CourseList;