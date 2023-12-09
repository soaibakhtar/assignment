// components/StudentDashboard/StudentDashboard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses, toggleEnrollment } from "../../actions";

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.enrolledCourses);

  const handleEnroll = (courseId) => {
    dispatch(toggleEnrollment(courseId));
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.some((course) => course.id === courseId);
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled. Enroll in courses from the Course Listing Page.</p>
      ) : (
        <div className="container">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="item">
            <img src={course.thumbnail} alt={course.name} />
            <div className="name">
              <p>{course.name}</p>
              <p>Instructor : {course.instructor}</p>
            </div>
            <div className="button-cl">
              <Link to={`/course/${course.id}`}>View Details</Link>
              <button onClick={() => handleEnroll(course.id)}>
                {isEnrolled(course.id) ? "Enrolled" : "Enroll"}
              </button>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default StudentDashboard;
