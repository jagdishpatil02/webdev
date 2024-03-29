var otpServer = [7, 7, 7, 7, 7];

let otpLocal = [];
const otpInputs = document.getElementsByClassName("otp-input");
const message = document.getElementById("message");
const resentOTP = document.getElementById("resentOTP");

const otpInputsArr = Array.from(otpInputs);
otpInputsArr.forEach(function (control) {
  control.addEventListener("keyup", function (event) {
    // Focus on the next sibling
    otpLocal.push(control.value);
    if (control.nextElementSibling) {
      control.nextElementSibling.focus();
    } else {
      otpInputsArr.forEach(function (control) {
        if (otpLocal.sort().join(",") === otpServer.sort().join(",")) {
          control.classList.add("primary-success");
          message.innerHTML = "OTP is correct, Wait for a moment !";
          message.classList.add("text-success");
          resentOTP.innerHTML = "";
        } else {
          control.classList.add("primary-danger");
          message.innerText = "Wrong OTP...Only 2 attempts left !";
          resentOTP.innerText = "Resend OTP";
          message.classList.add("text-danger");
        }
      });
    }
  });
});

document.getElementById("resentOTP").addEventListener("click", function () {
  otpInputsArr.forEach(function (control) {
    control.value = null;
    control.classList.remove("primary-danger");
    message.innerHTML = "";
    message.classList.remove("text-danger");
    otpLocal = [];
  });
});
