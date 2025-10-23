

function getAverage(arrayTest) {
  if (arrayTest.length === 0) return 0;
  let result = 0;
  for (let i = 0; i < arrayTest.length; i++) {
    result += arrayTest[i];
  }
  const average = result / arrayTest.length;
  return average;
}

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


function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
  
}


function studentMsg(classScores, studentNumericScore) {
  const averageScore = getAverage(classScores);
  const studentGrade = getGrade(studentNumericScore);
  const passed = hasPassingGrade(studentNumericScore); 

  if (passed) {
    return `Class average: ${averageScore}. Your grade: ${studentGrade}. You passed the course.`;
  } else {
    return `Class average: ${averageScore}. Your grade: ${studentGrade}. You failed the course.`;
  }
}


