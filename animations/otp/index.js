var otpServer = [7, 7, 7, 7, 7];

const otpLocal = [];
const otpInputs = document.getElementsByClassName('otp-input');
const message = document.getElementById('message');
const otpInputsArr = Array.from(otpInputs);
otpInputsArr.forEach(function (control) {
  control.addEventListener('keyup', function (event) {
    // Focus on the next sibling
    otpLocal.push(control.value);
    if (control.nextElementSibling) {
      control.nextElementSibling.focus();
    } else {
      otpInputsArr.forEach(function (control) {
        if (otpLocal.sort().join(',') === otpServer.sort().join(',')) {
          control.classList.add('primary-success');
          message.innerHTML = 'OTP is correct, Wait for a moment !';
          message.classList.add('text-success');
        } else {
          control.classList.add('primary-danger');

          message.innerHTML = 'Wrong OTP...Only 2 attempts left !';
          message.classList.add('text-danger');
        }
      });
    }
  });
});
