const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "yellow", "grey", "pink", "purple"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
const randomNumber = getRandomNumber();
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    let colorsLength = colors.length;
    let randomNumber = Math.floor(Math.random() * colorsLength);
    return randomNumber;
}