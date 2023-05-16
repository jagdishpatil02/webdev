let failLogin = document.getElementById('failLogin');
let sucessLogin = document.getElementById('sucessLogin');

function login(type) {
  if (type == 'fail') {
    failLogin.style.background =
      'linear-gradient(-45deg, #FF4433, #ff9797	, #FF4433, #ff9797	)';
    failLogin.style.animation = 'gradient 5s ease ';
    failLogin.style.backgroundSize = '400% 400%';
    setTimeout(() => {
      failLogin.removeAttribute('style');
    }, 5000);
  } else {
    sucessLogin.style.background =
      'linear-gradient(-45deg, #228B22, #0BDA51,#228B22, #0BDA51)';
    sucessLogin.style.animation = 'gradient 5s ease ';
    sucessLogin.style.backgroundSize = '400% 400%';
    setTimeout(() => {
      sucessLogin.removeAttribute('style');
    }, 5000);
  }
}
