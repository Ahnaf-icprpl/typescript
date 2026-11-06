const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: false },
  { name: "Citra", present: true },
  { name: "Dimas", present: true },
  { name: "Eka", present: false }
];

function printAttendanceReport(students: { name: string; present: boolean }[]): void {
  let present = 0;
  let absent = 0;
  for (const student of students) {
    if (student.present) {
      present++;
    } else {
      absent++;
      console.log("Absent:", student.name);
    }
  }
  console.log("Total present:", present);
  console.log("Total absent:", absent);
}

printAttendanceReport(attendances);
