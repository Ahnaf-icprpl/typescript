/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

function evaluateStudents(list: { name: string; score: number }[]) {
  let gradeA = 0;
  let gradeB = 0;
  let gradeC = 0;
  let gradeD = 0;
  let highest = list[0].score;
  let lowest = list[0].score;
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    let s = list[i].score;
    total += s;

    if (s > highest) highest = s;
    if (s < lowest) lowest = s;

    if (s >= 90) {
      gradeA++;
    } else if (s >= 80) {
      gradeB++;
    } else if (s >= 70) {
      gradeC++;
    } else {
      gradeD++;
    }
  }

  let avg = total / list.length;

  console.log("Grade A:", gradeA);
  console.log("Grade B:", gradeB);
  console.log("Grade C:", gradeC);
  console.log("Grade D:", gradeD);
  console.log("Highest score:", highest);
  console.log("Lowest score:", lowest);
  console.log("Average score:", avg);
}

evaluateStudents(students);