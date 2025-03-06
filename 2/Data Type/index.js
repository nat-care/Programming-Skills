let stringVar = "Hello, world!"; // String
let intVar = 10; // Integer
let boolVar = 555; // Boolean
var asd = "x";

console.log("Variable Types:", asd);
console.log("String:", stringVar);
console.log("Integer:", intVar);
console.log("Boolean:", boolVar);

let intFromString = parseInt("10"); // แปลงจาก String เป็น Integer
let floatFromString = parseFloat("3.14"); // แปลงจาก String เป็น Float
let strFromInt = String(100); // แปลงจาก Integer เป็น String

console.log("intFromString:", intFromString);
console.log("floatFromString:", floatFromString);
console.log("strFromInt:", strFromInt);

let myList = [1, 2, 3, 4];
myList.push(5);
myList[0] = 10;
myList.splice(myList.indexOf(3), 1);

console.log("Updated Array:", myList);

let student = { name: "Tom", age: 20, grade: "A" };

console.log("Student:", student);
student.age = 21;
student.school = "ABC School";

console.log("Updated Student:", student);

const myTuple = [1, 2, 3, 4, 5];

const mySet = new Set([1, 2, 2, 3, 4, 5, 5]);

console.log("Tuple:", myTuple);
console.log("Set:", [...mySet]);

// jsonload
let jsonString = '{"name": "John", "age": 25, "city": "Bangkok"}';
let jsonData = JSON.parse(jsonString);
console.log("Parsed JSON:", jsonData);

// jsondump
let newJsonString = JSON.stringify(jsonData);
console.log("Stringified JSON:", newJsonString);
