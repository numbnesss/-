document.addEventListener('DOMContentLoaded', function() {
    const signInBlock = document.querySelector('.sign-in');
    const registrationBlock = document.querySelector('.registration');
    const createAccountLinkSignIn = document.querySelector('.sign-in .create-account a');
    const createAccountLinkRegistration = document.querySelector('.registration .create-account a');
  
    if (signInBlock && registrationBlock && createAccountLinkSignIn && createAccountLinkRegistration) {
      createAccountLinkSignIn.addEventListener('click', function(e) {
        e.preventDefault();
        signInBlock.style.display = 'none'; 
        registrationBlock.style.display = 'flex';
      });
  
      createAccountLinkRegistration.addEventListener('click', function(e) {
        e.preventDefault();
        registrationBlock.style.display = 'none';
        signInBlock.style.display = 'flex';
      });
    }
  });
  
const formReg = document.querySelector(".registration")
const loginReg = document.querySelector(".loginReg")
const passwordReg = document.querySelector(".passwordReg")
const name = document.querySelector(".nameReg")
const btnReg = document.querySelector(".login-btn")

const formSign = document.querySelector(".sign-in")
const loginSign = document.querySelector(".loginSign")
const passwordSign = document.querySelector(".passwordSign")
const btnSign = document.querySelector(".sign-btn")

const p = document.querySelector(".p")
const greetingForm = document.querySelector(".greeting")

let accountData = null

btnReg.addEventListener("click",  (e)=>{
    e.preventDefault();

    if(loginReg.value.trim() === "" || passwordReg.value.trim() === "" || name.value.trim() === ""){
        alert("Пожалуйста, заполните все поля!")
    }
    else{
        accountData = {
            login: loginReg.value,
            password: passwordReg.value,
            name: name.value
        }
        alert("Вы успешно зарегестрированы!")
        formReg.style.display = `none`
        formSign.style.display = `flex`
    }
})

btnSign.addEventListener("click", (e)=>{
    e.preventDefault();

    if(loginSign.value === accountData.login && passwordSign.value === accountData.password){
        alert("Успешный вход!")
        formSign.style.display = `none`
        greetingForm.style.display = `block`

        p.textContent = `Добро пожаловать, ${accountData.name}`
    }
    else{
        alert("Введены неверные данные")
    }
})  