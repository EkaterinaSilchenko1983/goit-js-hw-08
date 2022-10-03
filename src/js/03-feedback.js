import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';
// const formData = {};
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const inputEl = document.querySelector('input');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  // formData[evt.target.name] = evt.target.value;
  const formData = { email: inputEl.value, message: textarea.value };
  // console.log(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  // console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function cheksStorage() {
  const parseSavedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  // console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  // console.log(parseSavedData);
  if (parseSavedData) {
    inputEl.value = parseSavedData.email;
    textarea.value = parseSavedData.message;
  } else {
    inputEl.value = '';
    textarea.value = '';
  }
}
cheksStorage();
