document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("changeColorBtn");

  button.addEventListener("click", function () {
    const colors = ["#ffa9c1", "#ffa9b9", "#ffa9ab", "#ffaea9", "#ffbda9"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });
});


document.getElementById("inputBox").onkeyup = function () {
  document.getElementById("message").innerText = "คุณพิมพ์ว่า: " + this.value;
};


document.getElementById("clickBtn").onclick = function () {
  if (this.innerText === "ซ่อน") {
    this.innerText = "เปิด";  
    document.getElementById("Tastar").style.display = "none"; 
  } else {
    this.innerText = "ซ่อน";  

    document.getElementById("Tastar").style.display = "block";};
};

const img = document.getElementById("Tastar");
let isToggled = false;

img.addEventListener("click", function() {
    if (isToggled) {
        this.src = "img/Webnovel_Illustration_CH_300_-_TeSTAR_29.webp"; 
    } else {
        this.src = "img/Testar_Debut.webp"; 
    }
    isToggled = !isToggled; 
});

img.onmouseover = function() {
  this.src = "img/Webnovel_Illustration_CH_300_-_TeSTAR_29.webp"; 
};

img.onmouseout = function() {
  this.src = "img/Testar_Debut.webp"; 
};

document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("messageform");

  // ตรวจสอบว่าอีเมลมี @ และ .com
  if (!email.includes("@") || !email.endsWith(".com")) {
      message.style.color = "red";
      message.innerText = "อีเมลต้องมี '@' และลงท้ายด้วย '.com'";
      return;
  }

  // ถ้าข้อมูลถูกต้อง
  message.style.color = "green";
  message.innerText = "✅ ส่งข้อมูลเรียบร้อย!";
});