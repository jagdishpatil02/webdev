var marvelWrapper = document.querySelector("#marvel");
var dcWrapper = document.querySelector("#dc");
var body = document.body;

marvelWrapper.addEventListener("click", function () {
  marvelWrapper.classList.toggle("active");
  dcWrapper.classList.toggle("active");
  body.classList.add("transition");
  body.style.backgroundColor = "#fff";
});

dcWrapper.addEventListener("click", function () {
  dcWrapper.classList.toggle("active");
  marvelWrapper.classList.toggle("active");
  body.classList.add("transition");
  body.style.backgroundColor = "#000";
});
