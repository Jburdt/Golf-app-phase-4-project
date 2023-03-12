import CourseCard from './CourseCard';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const CourseList = ({ courses }) => {
  const history = useHistory();

  const renderNewForm = () => {
     history.push('/NewCourseForm')
  };

  return (
    <>
      <h3>Below are the courses available to play.</h3>
          <Button onClick={() => renderNewForm()} variant="primary" size="lg">
            Add new course
          </Button>
      { courses.map((course) => <CourseCard course={course} key={course.id} />)}
    </>
  )
}

export default CourseList;