/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
  studentId: string;
  studentName: string;
  gradeLevel: string;
  courseId: string;
  courseTitle: string;
  instructorName: string;
  totalLearningHours: number;
  registrationDate: string;
  isPaymentCompleted: boolean;
};

const registration1: Registration = {
  studentId: "ST001",
  studentName: "mario",
  gradeLevel: "10th Grade",
  courseId: "CS101",
  courseTitle: "Intro to TypeScript",
  instructorName: "faiz",
  totalLearningHours: 40,
  registrationDate: "2026-08-01",
  isPaymentCompleted: true,
};

const registration2: Registration = {
  studentId: "ST002",
  studentName: "baruna",
  gradeLevel: "11th Grade",
  courseId: "CS102",
  courseTitle: "Web Development",
  instructorName: "nabeel",
  totalLearningHours: 60,
  registrationDate: "2026-08-05",
  isPaymentCompleted: false,
};

const registration3: Registration = {
  studentId: "ST003",
  studentName: "zafrie",
  gradeLevel: "12th Grade",
  courseId: "CS103",
  courseTitle: "Backend API",
  instructorName: "haikal",
  totalLearningHours: 50,
  registrationDate: "2026-08-10",
  isPaymentCompleted: true,
};

console.log(registration1);
console.log(registration2);
console.log(registration3);