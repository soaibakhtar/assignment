// components/CourseListingPage/CourseListingPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CourseListingPage.css";
import { fetchCourses, toggleEnrollment } from "../../actions";

const CourseListingPage = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const courses = useSelector((state) => state.courses);

  const handleEnroll = (courseId) => {
    dispatch(toggleEnrollment(courseId));
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.some((course) => course.id === courseId);
  };

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="course-listing">
      <nav className="navbar">
        <div className="logo">
          <a href="/">CourseHub</a>
        </div>
        <div className="dashboard-button">
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

        <h1>Course Listing Page</h1>
      <div className="container">
        {courses.map((course) => (
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
    </div>
  );
};

export default CourseListingPage;
