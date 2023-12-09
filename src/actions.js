// actions.js
import api from './api'; // Import the api.js file

export const fetchCourses = () => {
  return async (dispatch) => {
    try {
      const courses = await api.getCourses();
      dispatch({ type: 'FETCH_COURSES', payload: courses });
    } catch (error) {
      console.error('Error fetching courses:', error);
      // Handle error, dispatch an action, or show an error message to the user
    }
  };
};

export const selectCourse = (courseId) => ({ type: 'SELECT_COURSE', payload: courseId });

export const markCourseCompleted = (courseId) => ({ type: 'MARK_COMPLETED', payload: courseId });

// actions.js
export const enrollCourse = (courseId) => ({ type: 'ENROLL_COURSE', payload: courseId });

export const toggleEnrollment = (courseId) => ({ type: 'TOGGLE_ENROLLMENT', payload: courseId });
