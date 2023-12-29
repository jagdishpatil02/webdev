function moveButton() {
  var movingBtn = document.getElementById("movingButton");

  var buttonRect = movingBtn.getBoundingClientRect();
  var windowWidth = window.innerWidth - buttonRect.width;
  var windowHeight = window.innerHeight - buttonRect.height;

  var randomLeft = Math.floor(Math.random() * windowWidth);
  var randomTop = Math.floor(Math.random() * windowHeight);

  movingBtn.style.left = randomLeft + "px";
  movingBtn.style.top = randomTop + "px";
}
