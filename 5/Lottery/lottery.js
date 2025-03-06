let lotteryNumber = ("000000" + Math.floor(Math.random() * 1000000)).slice(-6);
console.log("เลขที่ออก: " + lotteryNumber);

let front3 = lotteryNumber.slice(0, 3); // เลขหน้า 3 ตัว
let back3 = lotteryNumber.slice(3, 6); // เลขท้าย 3 ตัว
let back2 = lotteryNumber.slice(4, 6); // เลขท้าย 2 ตัว

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lotteryNumber").innerText =
    "เลขที่ออก: " + lotteryNumber;
  document.getElementById("front3").innerText = front3;
  document.getElementById("back3").innerText = back3;
  document.getElementById("back2").innerText = back2;
});

function validateInput(input) {
  input.value = input.value.replace(/[^0-9]/g, "").slice(0, 6);
}

function checkLottery() {
  let userGuess = document.getElementById("userGuess").value;
  if (userGuess.length !== 6) {
    alert("กรุณากรอกเลข 6 หลักก่อนตรวจสอบ!");
    return;
  }

  let resultText = "เสียใจด้วย! คุณไม่ถูกรางวัล 😢";
  let resultColor = "red";

  if (userGuess === lotteryNumber) {
    resultText = "ยินดีด้วย! คุณถูกรางวัลที่ 1 🎉";
    resultColor = "green";
  } else if (userGuess.slice(0, 3) === lotteryNumber.slice(0, 3)) {
    resultText = "คุณถูกรางวัลเลขหน้า 3 ตัว! 🎊";
    resultColor = "blue";
  } else if (userGuess.slice(3, 6) === lotteryNumber.slice(3, 6)) {
    resultText = "คุณถูกรางวัลเลขท้าย 3 ตัว! 🎊";
    resultColor = "blue";
  } else if (userGuess.slice(4, 6) === lotteryNumber.slice(4, 6)) {
    resultText = "คุณถูกรางวัลเลขท้าย 2 ตัว! 🎉";
    resultColor = "purple";
  }

  document.getElementById("result").innerText = resultText;
  document.getElementById("result").style.color = resultColor;
}
