const {
  getStudentName,
  getCourse,
  addCourseToStudent,
  countCourses,
  removeCourseFromStudent,
  findStudentById,
} = require("./objectIteration");

describe("Student Data Functions", () => {
  let students;

  beforeEach(() => {
    students = [
      { id: 1, name: "Alice", courses: ["Math", "Science", "History"] },
      { id: 2, name: "Bob", courses: ["History", "English", "Math", "Art"] },
      { id: 3, name: "Charlie", courses: ["Science", "English", "Music"] },
      { id: 4, name: "David", courses: ["Math", "History", "Art", "PE"] },
      { id: 5, name: "Eva", courses: ["Science", "Math", "Music"] },
      { id: 6, name: "Frank", courses: ["English", "Art"] },
      {
        id: 7,
        name: "Grace",
        courses: ["Math", "Science", "English", "Music"],
      },
      { id: 8, name: "Helen", courses: ["History", "Art", "PE"] },
      { id: 9, name: "Ivy", courses: ["Science", "English", "Art"] },
      { id: 10, name: "Jack", courses: ["Math", "History", "Music"] },
    ];
  });

  describe("getStudentName", () => {
    it("should return the name of the student", () => {
      expect(getStudentName(students[0])).toBe("Alice");
    });
  });

  describe("getCourse", () => {
    it("should return the course at the specified index", () => {
      expect(getCourse(students[4], 2)).toBe("Music");
    });
  });

  describe("addCourseToStudent", () => {
    it("should add a course to the student and return the updated student", () => {
      const student = students[7];
      const length = student.courses.length;
      const updatedStudent = addCourseToStudent(student, "Physics");
      expect(updatedStudent.courses.includes("Physics")).toBe(true);
      expect(updatedStudent.courses.length).toBe(length + 1);
    });
  });

  describe("countCourses", () => {
    it("should return the number of courses a student is enrolled in", () => {
      expect(countCourses(students[1])).toBe(4);
    });
  });

  describe("removeCourseFromStudent", () => {
    it("should remove a course from a student and return the updated student", () => {
      const student = students[6];
      const updatedStudent = removeCourseFromStudent(student, "Science");
      expect(updatedStudent.courses.includes("Science")).toBe(false);
    });
  });

  describe("findStudentById", () => {
    it("should return the student object with the matching id", () => {
      expect(findStudentById(10, students)).toEqual(students[9]);
    });
  });
});
