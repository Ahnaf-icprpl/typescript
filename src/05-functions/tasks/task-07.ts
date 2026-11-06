const students = [
  { name: "Alya", major: "Software Engineering", active: true },
  { name: "Budi", major: "Networking", active: false },
  { name: "Citra", major: "Software Engineering", active: true },
  { name: "Dimas", major: "Multimedia", active: true },
  { name: "Eka", major: "Networking", active: false }
];

type Student = { name: string; major: string; active: boolean };

function countActiveStudents(students: Student[]): number {
  let count = 0;
  for (const student of students) {
    if (student.active) count++;
  }
  return count;
}

function countInactiveStudents(students: Student[]): number {
  let count = 0;
  for (const student of students) {
    if (!student.active) count++;
  }
  return count;
}

function countStudentsByMajor(students: Student[], major: string): number {
  let count = 0;
  for (const student of students) {
    if (student.major === major) count++;
  }
  return count;
}

function printEnrollmentReport(students: Student[]): void {
  console.log("Total students:", students.length);
  console.log("Active:", countActiveStudents(students));
  console.log("Inactive:", countInactiveStudents(students));
  console.log("Software Engineering:", countStudentsByMajor(students, "Software Engineering"));
  console.log("Networking:", countStudentsByMajor(students, "Networking"));
  console.log("Multimedia:", countStudentsByMajor(students, "Multimedia"));
}

printEnrollmentReport(students);
