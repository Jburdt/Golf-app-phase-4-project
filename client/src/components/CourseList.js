import CourseCard from './CourseCard';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const CourseList = ({ courses, editCourse, deletedCourse }) => {
  const history = useHistory();

  const renderNewForm = () => {
     history.push(`/courses/new`)
  };

  return (
    <div class="container">
      <h3 class="text-center">Below are the courses available to play</h3>
          <Button onClick={() => renderNewForm()} variant="outline-primary" size="lg">
            Add new course
          </Button><hr/>
      { courses.map((course) => <CourseCard editCourse={editCourse} courses={courses} deletedCourse={deletedCourse} course={course} key={course.id} />)}
    </div>
  )
}

export default CourseList;