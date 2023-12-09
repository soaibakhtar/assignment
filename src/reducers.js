// reducers.js
const initialState = {
    courses: [],
    selectedCourse: null,
    enrolledCourses: [],
  };
  
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COURSES':
        return { ...state, courses: action.payload };
      case 'SELECT_COURSE':
        return { ...state, selectedCourse: state.courses.find((course) => course.id === action.payload) };
      case 'MARK_COMPLETED':
        return {
          ...state,
          enrolledCourses: state.enrolledCourses.map((course) =>
            course.id === action.payload ? { ...course, completed: true } : course
          ),
        };
        case 'TOGGLE_ENROLLMENT':
      const courseToAdd = state.courses.find((course) => course.id === action.payload);

      if (state.enrolledCourses.some((course) => course.id === action.payload)) {
        // Unenroll the course
        return {
          ...state,
          enrolledCourses: state.enrolledCourses.filter((course) => course.id !== action.payload),
        };
      } else {
        // Enroll the course
        return {
          ...state,
          enrolledCourses: [...state.enrolledCourses, courseToAdd],
        };
      }

      default:
        return state;
    }
  };
  
  export default appReducer;
  