(function () {
  let scrollContainer = document.querySelector(".gallery");
  let nextBtn = document.querySelector("#nextBtn");
  let backBtn = document.querySelector("#backBtn");

  scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";
  });

  nextBtn.addEventListener("click", (e) => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
  });

  backBtn.addEventListener("click", (e) => {
    scrollContainer.style.scrollBehavior = "smooth";

    scrollContainer.scrollLeft -= 900;
  });
})();
