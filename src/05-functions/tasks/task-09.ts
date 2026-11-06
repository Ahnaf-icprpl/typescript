const patients = [
  { id: "PT001", name: "Alya", age: 17, department: "Pediatrics", admitted: true, bill: 850000 },
  { id: "PT002", name: "Budi", age: 45, department: "Cardiology", admitted: false, bill: 1200000 },
  { id: "PT003", name: "Citra", age: 68, department: "Cardiology", admitted: true, bill: 2500000 },
  { id: "PT004", name: "Dimas", age: 33, department: "Orthopedics", admitted: true, bill: 640000 },
  { id: "PT005", name: "Eka", age: 14, department: "Pediatrics", admitted: false, bill: 350000 }
];

type Patient = typeof patients[number];

function countAdmitted(list: Patient[]): number {
  let count = 0;
  for (const patient of list) {
    if (patient.admitted) count++;
  }
  return count;
}

function countDischarged(list: Patient[]): number {
  let count = 0;
  for (const patient of list) {
    if (!patient.admitted) count++;
  }
  return count;
}

function countDepartments(list: Patient[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const patient of list) {
    counts[patient.department] = (counts[patient.department] ?? 0) + 1;
  }
  return counts;
}

function highestBill(list: Patient[]): number {
  let highest = list[0].bill;
  for (const patient of list) {
    if (patient.bill > highest) highest = patient.bill;
  }
  return highest;
}

function lowestBill(list: Patient[]): number {
  let lowest = list[0].bill;
  for (const patient of list) {
    if (patient.bill < lowest) lowest = patient.bill;
  }
  return lowest;
}

function totalRevenue(list: Patient[]): number {
  let total = 0;
  for (const patient of list) {
    total += patient.bill;
  }
  return total;
}

function averageBill(total: number, count: number): number {
  return total / count;
}

function admittedNames(list: Patient[]): string[] {
  const names: string[] = [];
  for (const patient of list) {
    if (patient.admitted) names.push(patient.name);
  }
  return names;
}

const total = totalRevenue(patients);
const report = {
  patients: patients.length,
  admitted: countAdmitted(patients),
  discharged: countDischarged(patients),
  departments: countDepartments(patients),
  highest: highestBill(patients),
  lowest: lowestBill(patients),
  average: averageBill(total, patients.length),
  revenue: total,
  names: admittedNames(patients)
};

function printHospitalReport(report: {
  patients: number;
  admitted: number;
  discharged: number;
  departments: Record<string, number>;
  highest: number;
  lowest: number;
  average: number;
  revenue: number;
  names: string[];
}): void {
  console.log("Total patients:", report.patients);
  console.log("Admitted:", report.admitted);
  console.log("Discharged:", report.discharged);
  for (const department in report.departments) {
    console.log(department + ":", report.departments[department]);
  }
  console.log("Highest bill:", report.highest);
  console.log("Lowest bill:", report.lowest);
  console.log("Average bill:", report.average);
  console.log("Total revenue:", report.revenue);
  console.log("Admitted patients:", report.names.join(", "));
}

printHospitalReport(report);
