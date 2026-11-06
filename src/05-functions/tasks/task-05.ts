const scores = [82, 91, 76, 88, 69, 94, 73, 85, 79, 97];

function findHighestScore(scores: number[]): number {
  let highest = scores[0];
  for (const score of scores) {
    if (score > highest) highest = score;
  }
  return highest;
}

function findLowestScore(scores: number[]): number {
  let lowest = scores[0];
  for (const score of scores) {
    if (score < lowest) lowest = score;
  }
  return lowest;
}

function calculateAverage(scores: number[]): number {
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  return total / scores.length;
}

function countPassedStudents(scores: number[]): number {
  let passed = 0;
  for (const score of scores) {
    if (score >= 75) passed++;
  }
  return passed;
}

function printScoreReport(scores: number[]): void {
  console.log("Highest score:", findHighestScore(scores));
  console.log("Lowest score:", findLowestScore(scores));
  console.log("Average score:", calculateAverage(scores));
  console.log("Passed:", countPassedStudents(scores));
}

printScoreReport(scores);
