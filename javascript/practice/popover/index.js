let popoverTop = document.querySelectorAll('.popover-top');

let popoverRight = document.querySelectorAll('.popover-bottom');

popoverTop.forEach((element) => {
  element.addEventListener('click', function (e) {
    showTopPopup(element);
  });
});

popoverRight.forEach((element) => {
  element.addEventListener('click', function (e) {
    showTopRightup(element);
  });
});

function showTopRightup(element) {
  var span = element.querySelector('span');
  if (span.classList.contains('hidden')) {
    span.classList.toggle('hidden');
  } else {
    span.classList.toggle('hidden');
  }
}

function showTopPopup(element) {
  var span = element.querySelector('span');
  if (span.classList.contains('hidden')) {
    span.classList.toggle('hidden');
  } else {
    span.classList.toggle('hidden');
  }
}
