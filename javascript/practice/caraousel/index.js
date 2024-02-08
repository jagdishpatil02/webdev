let slides = document.querySelectorAll(".carousel-wrapper img");

let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function gotoPrevSlide() {
  counter--;
  slideImage();
}

function gotoNextSlide() {
  counter++;
  slideImage();
}

const slideImage = () => {
  slides.forEach((slide, index) => {
    if (counter < slides.length) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
      if (counter == 4) {
        counter = counter - 1;
      }
    }
  });
};
