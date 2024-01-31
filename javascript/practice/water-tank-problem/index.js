let firstContainer = 0;
let firstContainerFlag = true;
let secondContainerFlag = true;

let secondContainer = 0;
let thirdContainer = 0;
let fouthContainer = 0;
let intervalId;

function fillContainer(target) {
  if (firstContainerFlag) {
    firstContainer = 300;
    firstContainerFlag = false;
  } else {
    firstContainer += 200;
  }
  if (secondContainerFlag) {
    secondContainer = 300;
    secondContainerFlag = false;
  } else {
    secondContainer += 200;
  }
  console.log(firstContainer);
  intervalId = setInterval(function () {
    setFilledContainer(target);
  }, 1000);
}

function setFilledContainer(target) {
  let waterContainer = document.querySelector("." + target);
  let filledContainer = waterContainer.querySelector(".filled-container");
  let filledValueContainer = waterContainer.querySelector(".filled-value");
  switch (target) {
    case "first":
      firstContainer -= 50;
      filledValueContainer.textContent = firstContainer + "L";
      filledContainer.style.height = firstContainer / 4 + "px";
      secondContainer = firstContainer;
      let secondfilledContainer = document.querySelector(
        ".second .filled-container"
      );
      let secondfilledValueContainer = document.querySelector(
        ".second .filled-value"
      );
      secondfilledContainer.style.height = secondContainer / 4 + "px";
      secondfilledValueContainer.textContent = secondContainer + "L";
      setTimeout(function () {
        clearInterval(intervalId);
      }, 2000);
      break;
    case "second":
      secondContainer -= 50;
      filledValueContainer.textContent = secondContainer + "L";
      filledContainer.style.height = secondContainer / 4 + "px";
      let firstfilledContainer = document.querySelector(
        ".first .filled-container"
      );
      let firstfilledValueContainer = document.querySelector(
        ".first .filled-value"
      );
      firstfilledContainer.style.height = secondContainer / 4 + "px";
      firstfilledValueContainer.textContent = secondContainer + "L";
      setTimeout(function () {
        clearInterval(intervalId);
      }, 2000);
      break;

    default:
      break;
  }
}

function setEmptyContainer() {
  firstContainer = 0;
  secondContainer = 0;
  thirdContainer = 0;
  fouthContainer = 0;
  firstContainerFlag = true;
  secondContainer = true;
  let waterContainer = document.querySelectorAll(".water-tank-container");
  waterContainer.forEach((element) => {
    let filledValue = element.querySelectorAll(".filled-value");
    let filledValueArr = Array.from(filledValue);
    filledValueArr.forEach((filledValueEl) => {
      filledValueEl.textContent = "0.00L";
    });
    let filledContainer = document.querySelectorAll(".filled-container");
    let filledContainerArr = Array.from(filledContainer);
    filledContainerArr.forEach((filledContainerEl) => {
      filledContainerEl.style.height = "0px";
    });
  });
}
