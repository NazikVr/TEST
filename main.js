const form = document.querySelector('form');

const formInputs = document.querySelectorAll('.form__input');
const inputName = document.querySelector('.form__input--name');
const inputPhone = document.querySelector('.form__input--phone');
const inputMessage = document.querySelector('.form__input--message');
const inputCheckbox = document.querySelector('.form__input--checkbox');
const inputErr = document.querySelectorAll('.form__input-group--error');
const inputSucc = document.querySelectorAll('.form__input-group--success');


form.onsubmit = function (event) {
  event.preventDefault();
  let PhoneVal = inputPhone.value;
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('form__input--error');
      inputErr.forEach((err) => {
        err.style.display = 'block';
      })

    } else {
      input.classList.remove('form__input--error')
      inputErr.forEach((err) => {
        err.style.display = 'none';
      })
    }
  });

  if (emptyInputs !== 0) {
    return false;
  }

  if (!inputCheckbox) {
    return false
  }
  form.submit();
}



function changeName() {
  if (inputName.value !== '') {
    inputSucc[0].style.display = 'block';
    inputErr[0].style.display = 'none';
    inputName.classList.add('form__input--success');
  }
  else {
    inputSucc[0].style.display = 'none';
    inputErr[0].style.display = 'block';
    inputName.classList.remove('form__input--success')
  }
  return true
}


const phoneNumberRegex = /^\d{10}$/;

function changeNum() {
  if (inputPhone.value !== '' && phoneNumberRegex.test(inputPhone.value)) {
    inputSucc[1].style.display = 'block';
    inputErr[1].style.display = 'none';
    inputPhone.classList.add('form__input--success');
  }
  else {
    inputSucc[1].style.display = 'none';
    inputErr[1].style.display = 'block';
    inputPhone.classList.remove('form__input--success')
  }
  return true
}

function changeMes() {
  if (inputMessage.value !== '') {
    inputSucc[2].style.display = 'block';
    inputErr[2].style.display = 'none';
    inputMessage.classList.add('form__input--success')
  }
  else {
    inputSucc[2].style.display = 'none';
    inputErr[2].style.display = 'block';
    inputMessage.classList.remove('form__input--success')
  }
  return true
}