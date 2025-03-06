function validateInput(input) {
  if (input.value > 100) {
    input.value = 100;
  } else if (input.value < 0) {
    input.value = 0;
  }
}

function convertToGradePoint(score) {
  if (score >= 80) return 4.0;
  if (score >= 75) return 3.5;
  if (score >= 70) return 3.0;
  if (score >= 65) return 2.5;
  if (score >= 60) return 2.0;
  if (score >= 55) return 1.5;
  if (score >= 50) return 1.0;
  return 0.0;
}

function calculateGPA() {
  let scores = [
    document.getElementById("score1").value,
    document.getElementById("score2").value,
    document.getElementById("score3").value,
    document.getElementById("score4").value,
    document.getElementById("score5").value,
  ];

  let totalCredits = 15;
  let totalGradePoints = 0;

  for (let i = 0; i < scores.length; i++) {
    let score = parseFloat(scores[i]);
    if (isNaN(score) || score < 0 || score > 100) {
      alert("กรุณากรอกคะแนนที่ถูกต้อง (0-100) ในทุกวิชา");
      return;
    }
    totalGradePoints += convertToGradePoint(score) * 3;
  }

  let gpa = totalGradePoints / totalCredits;
  document.getElementById("result").innerText =
    "GPA ของคุณคือ: " + gpa.toFixed(2);
}
