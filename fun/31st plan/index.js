function addMouseMoveListener(elementId) {
  document.body.addEventListener("mousemove", function (event) {
    let movingBtn = document.getElementById(elementId);

    let buttonRect = movingBtn.getBoundingClientRect();
    let windowWidth = window.innerWidth - buttonRect.width;
    let windowHeight = window.innerHeight - buttonRect.height;

    let distanceThreshold = 50;

    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let buttonX = buttonRect.left + buttonRect.width / 2;
    let buttonY = buttonRect.top + buttonRect.height / 2;

    let distanceToButton = distance(mouseX, mouseY, buttonX, buttonY);

    if (distanceToButton < distanceThreshold) {
      let randomLeft = Math.floor(Math.random() * windowWidth);
      let randomTop = Math.floor(Math.random() * windowHeight);

      movingBtn.style.left = randomLeft + "px";
      movingBtn.style.top = randomTop + "px";
    }
  });
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Add listeners for both buttons
addMouseMoveListener("movingButton");
addMouseMoveListener("movingButtonError");
