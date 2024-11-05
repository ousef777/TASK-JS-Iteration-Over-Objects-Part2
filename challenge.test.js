const { getStudentsByCourse, listAllCourses } = require("./objectIteration");

describe("🌶️🌶️🌶️ Challenges", () => {
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

  describe("getStudentsByCourse 🌶️🌶️", () => {
    it("should return an array of student objects enrolled in a specified course", () => {
      const enrolledStudents = getStudentsByCourse(students, "Music");
      expect(enrolledStudents).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: 3, name: "Charlie" }),
          expect.objectContaining({ id: 5, name: "Eva" }),
          expect.objectContaining({ id: 7, name: "Grace" }),
          expect.objectContaining({ id: 10, name: "Jack" }),
        ])
      );
      expect(enrolledStudents.length).toBe(4);
    });
  });

  describe("listAllCourses 🌶️🌶️🌶️", () => {
    it("should return an array of all unique course names", () => {
      const allCourses = listAllCourses(students);
      expect(allCourses).toEqual(
        expect.arrayContaining([
          "Math",
          "Science",
          "History",
          "English",
          "Art",
          "Music",
          "PE",
        ])
      );
      expect(allCourses.length).toBe(7);
    });
  });
});
