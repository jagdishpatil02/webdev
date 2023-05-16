let bodyWrapper = document.getElementById('bodyWrapper');

(function () {
  bodyWrapper.style.background = '#e96443';
  bodyWrapper.style.background = 'linear-gradient(to right, #904e95, #e96443)';
})();

function getRandomGradient() {
  const colorOne = generateRandomColor('0xFFFFFF');
  const colorTwo = generateRandomColor('0xFFFFFF');
  bodyWrapper.style.animation = 'danger-gradient 10s linear ';
  bodyWrapper.style.backgroundSize = '400% 400%';
  bodyWrapper.style.backgroundImage =
    'linear-gradient(' + 'to left' + ', ' + colorOne + ', ' + colorTwo + ')';
}

function generateRandomColor(maxVal) {
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}
