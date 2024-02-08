document.addEventListener("DOMContentLoaded", function () {
  let stars = document.querySelectorAll(".star-rating .stars");

  stars.forEach((star, index) => {
    star.addEventListener("click", function () {
      let ratingValue = index + 1;
      setRating(ratingValue);
    });

    function setRating(rating) {
      let starRating = document.querySelector(".star-rating");
      starRating.setAttribute("data-rating", rating);
      let selectedRating = document.querySelector("#selectedRating");
      selectedRating.textContent = rating;

      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add("active");
        } else {
          star.classList.remove("active");
        }
      });
    }
  });
});
