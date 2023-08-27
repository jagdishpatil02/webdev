"use strict";
let bgColorBtn = document.querySelector("#bgColorBtn");
let colorsNum = document.querySelector("#colorsNum");
let colorWrapper = document.querySelector("#colorWrapper");
bgColorBtn.addEventListener("click", () => {
    colorWrapper.innerHTML = "";
    // Convert the string input to a number using parseInt
    const numericValue = parseInt(colorsNum.value, 10);
    for (let i = 0; i < numericValue; i++) {
        const generatedColor = getRandomColor();
        appendColorElement(generatedColor);
    }
});
function appendColorElement(color) {
    let colorChildWrapper = document.createElement("div");
    colorChildWrapper.className = "flex justify-center items-center flex-col ";
    let colorObj = document.createElement("div");
    colorObj.className = "h-24 w-24 m-4 rounded";
    let colorValue = document.createElement("p");
    colorObj.style.backgroundColor = color;
    colorValue.innerText = color;
    colorChildWrapper.appendChild(colorObj);
    colorChildWrapper.appendChild(colorValue);
    colorWrapper.appendChild(colorChildWrapper);
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
