// components/CourseDetailsPage/CourseDetailsPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './CourseDetailsPage.css';
import { toggleEnrollment } from '../../actions';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const courseId = parseInt(id);
  const selectedCourse = useSelector((state) => state.courses.find((course) => course.id === courseId));
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const dispatch = useDispatch();

  const handleEnroll = () => {
    dispatch(toggleEnrollment(courseId));
  };

  const isEnrolled = () => {
    return enrolledCourses.some((course) => course.id === courseId);
  };

  if (!selectedCourse) {
    return <div>No course found</div>;
  }

  return (
    <div className="course-details">
      <nav className="navbar">
        <div className="logo">
          <a href='/'>CourseHub</a>
        </div>
        <div className="dashboard-button">
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <h1>Course Details</h1>
      <div className='details-conatiner'>
        <img src={selectedCourse.thumbnail} alt={selectedCourse.name}/>
      <h1>{selectedCourse.name}</h1>
      <div className='details-second-div'>
      <div>
      <p>Instructor : {selectedCourse.instructor}</p>
      <p>Description : {selectedCourse.description}</p>
      <p>Duration : {selectedCourse.duration}</p>
      <p>Schedule : {selectedCourse.schedule}</p>
      </div>
      <div>
      <button onClick={handleEnroll} disabled={isEnrolled()}>
        {isEnrolled() ? 'Enrolled' : 'Enroll'}
      </button>
      <p>Status : {selectedCourse.enrollmentStatus}</p>
      </div>
      </div>
      
       {/* Display Prerequisites */}
       <div>
          <h2>Prerequisites:</h2>
          <ul>
            {selectedCourse.prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </div>

      {/* Display Syllabus */}
      <div>
          <h2>Syllabus:</h2>
          <ul>
            {selectedCourse.syllabus.map((week) => (
              <li key={week.week}>
                <strong>Week {week.week}:</strong> {week.topic} - {week.content}
              </li>
            ))}
          </ul>
        </div>

    </div>

      <Link to="/courses">Back to Courses</Link>
    </div>
  );
};

export default CourseDetailsPage;
