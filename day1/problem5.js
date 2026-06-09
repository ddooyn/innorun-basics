const getGrade = (score) => {
  if (score >= 90) {
    console.log("A 등급입니다.");
  } else if (score >= 80) {
    console.log("B 등급입니다.");
  } else if (score >= 70) {
    console.log("C 등급입니다.");
  } else {
    console.log("조금 더 연습합니다.");
  }
};

getGrade(95);
getGrade(82);
getGrade(75);
getGrade(68);
