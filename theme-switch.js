const body = document.querySelector("body");
const toggle = document.getElementById("switchTheme");
const logo = document.getElementById("logo");
const icons = document.querySelector("i");
const contentHead = document.getElementById("contentHead");
const inputCm = document.getElementById("inputCm");
const outputIn = document.getElementById("outputIn");
const inputCmInp = document.getElementById("inputCmInp");
const outputInText = document.getElementById("outputInText");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)";
    logo.style.color = "black";
    icons.style.color = "black";
    switchTheme.style.color = "black";
    contentHead.style.color = "black";
    inputCm.style.color = "black";
    outputIn.style.color = "black"
    inputCmInp.style.color = "black";
    outputInText.style.color = "black";
  } else {
    body.style.background =
      "linear-gradient(to right, #0f0c29, #302b63, #24243e)";
    logo.style.color = "white";
    icons.style.color = "white";
    switchTheme.style.color = "white";
    contentHead.style.color = "white";
    inputCm.style.color = "white";
    outputIn.style.color = "white";
    inputCmInp.style.color = "white";
    outputInText.style.color = "white";
  }
});
