const enrollments = [
  { student: "Alya", course: "TypeScript", completed: true, score: 91, duration: 38 },
  { student: "Budi", course: "TypeScript", completed: false, score: 45, duration: 12 },
  { student: "Citra", course: "Database", completed: true, score: 87, duration: 42 },
  { student: "Dimas", course: "Backend", completed: true, score: 96, duration: 40 },
  { student: "Eka", course: "Database", completed: false, score: 60, duration: 18 },
  { student: "Fajar", course: "Backend", completed: true, score: 82, duration: 35 },
  { student: "Gita", course: "TypeScript", completed: true, score: 88, duration: 36 },
  { student: "Hana", course: "Backend", completed: false, score: 70, duration: 20 }
];

type Enrollment = typeof enrollments[number];

type Dashboard = {
  total: number;
  completed: number;
  incomplete: number;
  percentage: number;
  highest: number;
  lowest: number;
  average: number;
  passed: number;
  hours: number;
  averageDuration: number;
};

type CourseReport = { name: string; students: number; average: number };

function countCompleted(list: Enrollment[]): number {
  let count = 0;
  for (const item of list) {
    if (item.completed) count++;
  }
  return count;
}

function completionPercentage(completed: number, total: number): number {
  return completed / total * 100;
}

function highestScore(list: Enrollment[]): number {
  let highest = list[0].score;
  for (const item of list) {
    if (item.score > highest) highest = item.score;
  }
  return highest;
}

function lowestScore(list: Enrollment[]): number {
  let lowest = list[0].score;
  for (const item of list) {
    if (item.score < lowest) lowest = item.score;
  }
  return lowest;
}

function averageScore(list: Enrollment[]): number {
  let total = 0;
  for (const item of list) {
    total += item.score;
  }
  return total / list.length;
}

function countPassed(list: Enrollment[]): number {
  let count = 0;
  for (const item of list) {
    if (item.score >= 75) count++;
  }
  return count;
}

function groupCourses(list: Enrollment[]): Record<string, Enrollment[]> {
  const courses: Record<string, Enrollment[]> = {};
  for (const item of list) {
    if (!courses[item.course]) courses[item.course] = [];
    courses[item.course].push(item);
  }
  return courses;
}

function totalHours(list: Enrollment[]): number {
  let total = 0;
  for (const item of list) {
    total += item.duration;
  }
  return total;
}

function averageDuration(hours: number, total: number): number {
  return hours / total;
}

function makeReport(list: Enrollment[]): Dashboard {
  const completed = countCompleted(list);
  const hours = totalHours(list);
  return {
    total: list.length,
    completed,
    incomplete: list.length - completed,
    percentage: completionPercentage(completed, list.length),
    highest: highestScore(list),
    lowest: lowestScore(list),
    average: averageScore(list),
    passed: countPassed(list),
    hours,
    averageDuration: averageDuration(hours, list.length)
  };
}

function courseReports(list: Enrollment[]): CourseReport[] {
  const courses = groupCourses(list);
  const reports = [];
  for (const name in courses) {
    reports.push({
      name,
      students: courses[name].length,
      average: averageScore(courses[name])
    });
  }
  return reports;
}

function printDashboard(report: Dashboard): void {
  console.log("Total enrollments:", report.total);
  console.log("Completed:", report.completed);
  console.log("Incomplete:", report.incomplete);
  console.log("Completion percentage:", report.percentage + "%");
  console.log("Highest score:", report.highest);
  console.log("Lowest score:", report.lowest);
  console.log("Average score:", report.average);
  console.log("Passed:", report.passed);
  console.log("Total learning hours:", report.hours);
  console.log("Average learning duration:", report.averageDuration);
}

function printCourses(reports: CourseReport[]): void {
  for (const report of reports) {
    console.log(report.name + " students:", report.students);
    console.log(report.name + " average score:", report.average);
  }
}

printDashboard(makeReport(enrollments));
printCourses(courseReports(enrollments));
