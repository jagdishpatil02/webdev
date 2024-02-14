const progressBar = document.querySelector(".progressbar");
const progress = document.querySelector(".progress");
var currentWidth = progress.offsetWidth;
var targetWidth = progressBar.offsetWidth;
var increaseInterval;

function increaseWidth() {
  if (currentWidth < targetWidth) {
    currentWidth += 50;
    progress.style.width = currentWidth + "px";
  } else {
    clearInterval(increaseInterval);
  }
}

function startIncreasingWidth() {
  increaseInterval = setInterval(increaseWidth, 500);
}

function stopIncreasingWidth() {
  clearInterval(increaseInterval);
}

function restartWidth() {
  clearInterval(increaseInterval);
  progress.style.width = "0px";
  currentWidth = 0;
}
