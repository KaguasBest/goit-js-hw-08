import { common } from './common';

const { email, message } = common.form.elements;
let formStorage = {};

if (localStorage[common.KEY]) {
  try {
    formStorage = JSON.parse(localStorage.getItem(common.KEY));
    email.value = formStorage.email;
    message.value = formStorage.message;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function formSubmit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    alert(`You must fill out all fields of the form!`);
    return;
  }
  console.log(formStorage);
  localStorage.removeItem(common.KEY);
  email.value = '';
  message.value = '';
  formStorage = {};
}

function formInput() {
  formStorage.email = email.value;
  formStorage.message = message.value;
  localStorage.setItem(common.KEY, JSON.stringify(formStorage));
}

export { formInput, formSubmit };
