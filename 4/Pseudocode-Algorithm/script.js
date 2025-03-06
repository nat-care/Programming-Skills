// ฟังก์ชันคํานวณพื้นที่วงกลม
function calculateCircleArea() {
  // Get the value of radius from the input field
  let radius = parseFloat(document.getElementById("radius").value);

  if (isNaN(radius) || radius <= 0) {
    alert("กรุณากรอกค่ารัศมีที่เป็นตัวเลขและมากกว่า 0");
    return;
  }

  const pi = 3.14159;
  let area = pi * radius * radius;

  // Display the result
  document.getElementById("result").innerText =
    "พื้นที่วงกลมคือ: " + area.toFixed(2);
}

// ฟังก์ชันตรวจสอบอายุ
function checkAgeAndNumber() {
  let age = parseInt(document.getElementById("age").value);
  let number = parseInt(document.getElementById("number").value);
  let ageResult = document.getElementById("ageResult");
  let numberResult = document.getElementById("numberResult");

  // ตรวจสอบอายุ
  if (isNaN(age) || age <= 0) {
    alert("กรุณากรอกอายุที่ถูกต้อง");
    return;
  }

  let category;
  if (age < 13) {
    category = "เด็ก";
  } else if (age >= 13 && age <= 19) {
    category = "วัยรุ่น";
  } else {
    category = "ผู้ใหญ่";
  }
  ageResult.innerText = "คุณอยู่ในช่วงวัย: " + category;

  // ตรวจสอบเลขคู่หรือเลขคี่
  if (isNaN(number)) {
    alert("กรุณากรอกค่าตัวเลขที่ถูกต้อง");
    return;
  }

  let result = number % 2 === 0 ? "เลขคู่" : "เลขคี่";
  numberResult.innerText = "ตัวเลขที่กรอกคือ: " + result;
}

function showNumbers() {
  let num = "";
  for (let i = 1; i <= 10; i++) {
    num += i + " ";
  }
  document.getElementById("numberList").innerText = "เลขที่ได้: " + num;
}

function startInputLoop() {
  let inputs = [];
  let userInput;

  while (true) {
    userInput = prompt("กรอกข้อความ (พิมพ์ 'exit' เพื่อออก):");

    if (userInput === null || userInput.toLowerCase() === "exit") {
      console.log("ผู้ใช้พิมพ์ 'exit' และออกจากลูป");
      break;
    }

    inputs.push(userInput);
    console.log("ค่าที่ป้อน: ", userInput);
  }

  console.log("End - ค่าทั้งหมดที่ป้อน: ", inputs);
}

let dataArray = [];
function generateRandomArray(size = 100) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1); // สุ่มเลขระหว่าง 1-100
  }
  return arr;
}

// ฟังก์ชันอัปเดตตาราง
function updateTable(arr) {
  let tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = ""; // ล้างค่าก่อนหน้า

  for (let i = 0; i < 10; i++) {
    let row = tableBody.insertRow();
    for (let j = 0; j < 10; j++) {
      let cell = row.insertCell();
      cell.innerText = arr[i * 10 + j]; // ใส่ค่าตามลำดับ
    }
  }
}

// Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  let sortedArr = [...arr]; // Clone array เพื่อไม่แก้ไขต้นฉบับ
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]]; // สลับตำแหน่ง
      }
    }
  }
  return sortedArr;
}

// ฟังก์ชันโหลดข้อมูลใหม่
function populateTable() {
  dataArray = generateRandomArray();
  updateTable(dataArray);
}

// ฟังก์ชันเรียงลำดับข้อมูล
function sortTable() {
  if (dataArray.length === 0) {
    alert("กรุณาสร้างข้อมูลก่อน");
    return;
  }

  dataArray = bubbleSort(dataArray);
  updateTable(dataArray);
}

function factorial(n) {
  if (n < 0) {
    throw new Error("n ต้องเป็นเลขไม่ติดลบ");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function calculateFactorial() {
  const n = parseInt(document.getElementById("factorialInput").value, 10);
  const resultDiv = document.getElementById("factorialResult");
  try {
    const result = factorial(n);
    resultDiv.textContent = n + "! = " + result;
  } catch (error) {
    resultDiv.textContent = error.message;
  }
}

function fibonacci(n) {
  if (n < 0) {
    throw new Error("n ต้องเป็นเลขไม่ติดลบ");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function calculateFibonacci() {
  const n = parseInt(document.getElementById("fibonacciInput").value, 10);
  const resultDiv = document.getElementById("fibonacciResult");
  try {
    const result = fibonacci(n);
    resultDiv.textContent = "Fibonacci ลำดับที่ " + n + " = " + result;
  } catch (error) {
    resultDiv.textContent = error.message;
  }
}
