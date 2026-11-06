function showBonusStatus(name: string, score: number): void {
  if (score >= 85) {
    console.log(name + ": Bonus Approved");
  } else {
    console.log(name + ": Bonus Not Approved");
  }
}

showBonusStatus("John Cena", 92);
showBonusStatus("Undertaker", 76);
showBonusStatus("Rey Mysterio", 88);
