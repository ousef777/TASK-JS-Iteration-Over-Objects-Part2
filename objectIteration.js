const students = [
  {
    id: 1,
    name: "Alice",
    courses: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Bob",
    courses: ["History", "English", "Math", "Art"],
  },
  {
    id: 3,
    name: "Charlie",
    courses: ["Science", "English", "Music"],
  },
  {
    id: 4,
    name: "David",
    courses: ["Math", "History", "Art", "PE"],
  },
  {
    id: 5,
    name: "Eva",
    courses: ["Science", "Math", "Music"],
  },
  {
    id: 6,
    name: "Frank",
    courses: ["English", "Art"],
  },
  {
    id: 7,
    name: "Grace",
    courses: ["Math", "Science", "English", "Music"],
  },
  {
    id: 8,
    name: "Helen",
    courses: ["History", "Art", "PE"],
  },
  {
    id: 9,
    name: "Ivy",
    courses: ["Science", "English", "Art"],
  },
  {
    id: 10,
    name: "Jack",
    courses: ["Math", "History", "Music"],
  },
];

// 1) Using `getStudentName` that accepts an argument of `student` object, return the student name
function getStudentName(student) {
  // write your code here...
}
// console.log(getStudentName(students[0]))

// 2) Using `getCourse` function that accepts a `student` object and `courseIndex` return the course at the specified course index in the student's courses array

function getCourse(student, courseIndex) {
  // write your code here...
}
// console.log(getCourse(students[4], 2)); // Outputs: Music

// 3) Using `addCourseToStudent` function that accepts a `student` object and `course` string, it will add the course to the student's courses array, and return the `student` object
function addCourseToStudent(student, course) {
  // write your code here...
}
// console.log(addCourseToStudent(students[7], "Physics"));

// 4) Using `countCourses` function that accept a `student` object, return the number of courses the student in enrolled in
function countCourses(student) {
  // write your code here...
}
// console.log(countCourses(students[1])); // Outputs: 4

// 🌶️🌶️
// 5) Using `listAllCourses` function that accepts an array of `students`, return an array of all unique courses names across all students
function listAllCourses(students) {
  // write your code here...
}
// console.log(listAllCourses(students));

// 6) Using `removeCourseFromStudent` function that accepts a `student` object and `course` string, remove the `course` from the student's courses array,, and return the `student` object.
function removeCourseFromStudent(student, course) {
  // write your code here...
}
// console.log(removeCourseFromStudent(students[6], "Science"));

// 7) Using `findStudentById` function that accepts a `studentId` and an array of student objects `students`, return the student object with the matching id.
function findStudentById(studentId, students) {
  // write your code here...
}
// console.log(findStudentById(10, students));

// 🌶️🌶️🌶️
// 8) Using `getStudentsByCourse` function that accepts a `course` string and an array of student objects `students`, return an array of student objects who are enrolled in the specified course
function getStudentsByCourse(course, students) {
  // write your code here...
}
// console.log(getStudentsByCourse("Music", students));

module.exports = {
  getStudentName,
  getCourse,
  addCourseToStudent,
  countCourses,
  listAllCourses,
  removeCourseFromStudent,
  findStudentById,
  getStudentsByCourse,
};
