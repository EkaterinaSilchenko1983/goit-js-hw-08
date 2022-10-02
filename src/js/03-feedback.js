import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');
const btn = document.querySelector('button');
const textarea = document.querySelector('textarea');

cheksStorage();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormSubmit(evt) {
  evt.prevantDefault();
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}
function cheksStorage() {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  const parseSavedData = JSON.parse(savedData);
  console.log(parseSavedData);
  console.log(formData[evt.target.value]);
}
