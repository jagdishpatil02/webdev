var marvelWrapper = document.querySelector("#marvel");
var dcWrapper = document.querySelector("#dc");
var body = document.body;
var htmlElement = document.documentElement;

marvelWrapper.addEventListener("click", function () {
  marvelWrapper.classList.toggle("active");
  dcWrapper.classList.toggle("active");
  body.classList.add("transition");
  body.style.backgroundColor = "#fff";
  htmlElement.style.cursor = "url(./assets/thor-hammer-black.svg) 15 15, auto";
});

dcWrapper.addEventListener("click", function () {
  dcWrapper.classList.toggle("active");
  marvelWrapper.classList.toggle("active");
  body.classList.add("transition");
  body.style.backgroundColor = "#000";

  htmlElement.style.cursor = "url(./assets/thor-hammer-white.svg) 15 15, auto";
});
