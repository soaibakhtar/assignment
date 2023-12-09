// api.js
const courseModel = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.',
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.',
      },
      // Additional weeks and topics...
    ],
  },
  {
    id: 2,  // Unique id for the second course
    name: 'Introduction to JavaScript',
    instructor: 'Jane Doe',
    description: 'Learn the basics of JavaScript programming.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrltazgA2PN1iVP6HgNR8G8WEs9hbrhp5QHA&usqp=CAU',
    duration: '6 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Basic programming knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to JavaScript',
        content: 'Overview of JavaScript, basic syntax, and data types.',
      },
      {
        week: 2,
        topic: 'Functions and Control Flow',
        content: 'Working with functions, if statements, and loops.',
      },
      // Additional weeks and topics...
    ],
  },
  // Additional courses...
];

const api = {
  getCourses: async () => {
    // Simulate fetching courses from an API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(courseModel);
      }, 500);
    });
  },
};

export default api;
