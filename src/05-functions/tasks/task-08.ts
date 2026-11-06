const submissions = [
  { student: "Alya", submitted: true, score: 90 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 84 },
  { student: "Dimas", submitted: true, score: 72 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 96 }
];

type Submission = { student: string; submitted: boolean; score: number };

function countSubmitted(list: Submission[]): number {
  let count = 0;
  for (const item of list) {
    if (item.submitted) count++;
  }
  return count;
}

function countMissing(list: Submission[]): number {
  let count = 0;
  for (const item of list) {
    if (!item.submitted) count++;
  }
  return count;
}

function countPassed(list: Submission[]): number {
  let count = 0;
  for (const item of list) {
    if (item.submitted && item.score >= 75) count++;
  }
  return count;
}

function countRevisions(list: Submission[]): number {
  let count = 0;
  for (const item of list) {
    if (item.submitted && item.score < 75) count++;
  }
  return count;
}

function averageScore(list: Submission[]): number {
  let total = 0;
  for (const item of list) {
    if (item.submitted) total += item.score;
  }
  return total / list.length;
}

function highestScore(list: Submission[]): number {
  let highest = list[0].submitted ? list[0].score : 0;
  for (const item of list) {
    const score = item.submitted ? item.score : 0;
    if (score > highest) highest = score;
  }
  return highest;
}

function lowestScore(list: Submission[]): number {
  let lowest = list[0].submitted ? list[0].score : 0;
  for (const item of list) {
    const score = item.submitted ? item.score : 0;
    if (score < lowest) lowest = score;
  }
  return lowest;
}

function printSubmissionReport(list: Submission[]): void {
  console.log("Total students:", list.length);
  console.log("Submitted:", countSubmitted(list));
  console.log("Missing:", countMissing(list));
  console.log("Passed:", countPassed(list));
  console.log("Need revision:", countRevisions(list));
  console.log("Average score:", averageScore(list));
  console.log("Highest score:", highestScore(list));
  console.log("Lowest score:", lowestScore(list));
}

printSubmissionReport(submissions);
