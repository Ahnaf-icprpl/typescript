function calculateFinalGrade(assignment: number, midterm: number, final: number): number {
  return assignment * 0.3 + midterm * 0.3 + final * 0.4;
}

console.log("Alya:", calculateFinalGrade(85, 80, 92));
console.log("Budi:", calculateFinalGrade(78, 75, 81));
console.log("Citra:", calculateFinalGrade(90, 88, 95));
