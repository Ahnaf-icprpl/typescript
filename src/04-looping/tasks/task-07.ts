/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

function checkClassAttendance(data: { name: string; present: boolean }[]) {
  let present = 0;
  let absent = 0;
  let absentNames: string[] = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].present) {
      present++;
    } else {
      absent++;
      absentNames.push(data[i].name);
    }
  }

  let percentage = (present / data.length) * 100;

  console.log("Present:", present);
  console.log("Absent:", absent);
  console.log("Absent students:", absentNames.join(", "));
  console.log("Attendance percentage:", percentage + "%");
}

checkClassAttendance(attendances);
