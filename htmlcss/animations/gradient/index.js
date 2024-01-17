let dom = document.getElementById('leftpanel');
let password = document.getElementById('password');
let email = document.getElementById('email');
let errorMsg = document.getElementById('errorMsg');


function login() {
        errorMsg.innerText = 'email or password is incorrect.'
        dom.style.background = "linear-gradient(-45deg, #e2e8f0 , #e2e8f0, #e2e8f0, #e2e8f0)" ;
        dom.style.animation = "danger-gradient 10s ease "; 
        dom.style.backgroundSize = '400% 400%';
        dom.style.background = " url('https://i.ibb.co/Wn36dXz/pexels-codioful-formerly-gradienta-7130560.jpg')" ;
}


