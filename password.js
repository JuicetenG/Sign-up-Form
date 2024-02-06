let password1;
let password2;

let firstPassword = document.querySelector('#password');
let secondPassword = document.querySelector('#password-2');
let errorMessage = document.querySelector('#errorMessage');
let submit = document.querySelector('button');

errorMessage.style.visibility = 'hidden';

function passwordCheck() {
  if(password1 !== password2){
    firstPassword.classList.add('password-error');
    secondPassword.classList.add('password-error');
    errorMessage.style.visibility = 'visible'
    submit.disabled = true;
  } else {
    firstPassword.classList.remove('password-error');
    secondPassword.classList.remove('password-error');
    errorMessage.style.visibility = 'hidden';
    submit.disabled = false;
  }
}

firstPassword.addEventListener('input', () => {
  password1 = firstPassword.value;
  passwordCheck();
});

secondPassword.addEventListener('input', () => {
  password2 = secondPassword.value;
  passwordCheck();
});

