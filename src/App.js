// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import CourseListingPage from './components/CourseListingPage/CourseListingPage';
import CourseDetailsPage from './components/CourseDetailsPage/CourseDetailsPage';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/courses" element={<CourseListingPage />} />
          <Route path="/course/:id" element={<CourseDetailsPage />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/" element={<Navigate to="/courses" />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
