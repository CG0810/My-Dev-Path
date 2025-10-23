function getAverage(arrayTest) {
  if (arrayTest.length === 0) return 0; 
  let result = 0;
  for (let i = 0; i < arrayTest.length; i++) {
    result += arrayTest[i];
  }
  const average = result / arrayTest.length;
  return average;
}
console.log(getAverage([80, 89, 90, 100, 99]));
let averageScore = getAverage([0, 89, 90, 100, 99]);

function getGrade(score) {
    if (score === 100) {
    return "A+";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}
console.log(getGrade(90))
let studentScore = getGrade(90);

function hasPassingGrade(studentScore){
  if (studentScore !== "F") {
    return true;
  } else {
    return false;
  }
}
console.log(hasPassingGrade(studentScore));
let passed = hasPassingGrade(studentScore);

function studentMsg(averageScore, studentScore) {
  if (hasPassingGrade(studentScore) === true) {
    return `Class average: ${averageScore} Your grade: ${studentScore}. You passed the course.`;
  } else {
    return `Class average:  ${averageScore}. Your grade: ${studentScore}. You failed the course.`;
  }
}
console.log(studentMsg(averageScore, studentScore));
let message = studentMsg();