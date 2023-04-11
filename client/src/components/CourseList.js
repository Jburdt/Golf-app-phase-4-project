import CourseCard from './CourseCard';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const CourseList = ({ courses, editCourse, deletedCourse, error }) => {
  const history = useHistory();
  
  const renderNewForm = () => {
     history.push(`/courses/new`)
  };

  return (
    <div className="container">
      <h3 className="text-center">Below are the courses available to play</h3>
          <Button className='addCourse' onClick={() => renderNewForm()} variant="outline-primary" size="lg">
            Add new course
          </Button><hr/>
          <div>{error}</div>
      { courses.map((course) => {
        return <CourseCard 
        editCourse={editCourse} 
        courses={courses} 
        deletedCourse={deletedCourse} 
        course={course}
        key={course.id} 
      /> 
      })}
    </div>
  )
}

export default CourseList;