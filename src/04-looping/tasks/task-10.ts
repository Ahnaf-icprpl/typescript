/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

function checkSubmissions(list: { student: string; submitted: boolean; score: number }[]) {
  let submitted = 0;
  let notSubmitted = 0;
  let passed = 0;
  let revise = 0;
  let notSubmittedNames: string[] = [];
  let reviseNames: string[] = [];
  let totalScore = 0;

  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    let score = item.submitted ? item.score : 0;
    totalScore += score;

    if (item.submitted) {
      submitted++;
      if (score >= 75) {
        passed++;
      } else {
        revise++;
        reviseNames.push(item.student);
      }
    } else {
      notSubmitted++;
      notSubmittedNames.push(item.student);
    }
  }

  let avg = totalScore / list.length;

  console.log("Submitted:", submitted);
  console.log("Not submitted:", notSubmitted);
  console.log("Passed:", passed);
  console.log("Must revise:", revise);
  console.log("Not submitted students:", notSubmittedNames.join(", "));
  console.log("Must revise students:", reviseNames.join(", "));
  console.log("Class average:", avg);
}

checkSubmissions(submissions);