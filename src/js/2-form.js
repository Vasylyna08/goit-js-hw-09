const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const inputEl = event.currentTarget.elements.email.value.trim();
  const textareaEl = event.currentTarget.elements.message.value.trim();
  const formImput = {
    email: inputEl,
    message: textareaEl,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formImput));
}

function populateFormText() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    form.elements.email.value = savedMessage.email.trim();
    form.elements.message.value = savedMessage.message.trim();
  }
}
populateFormText();

function onFormSubmit(event) {
  event.preventDefault();
  const inputEl = event.currentTarget.elements.email.value.trim();
  const textareaEl = event.currentTarget.elements.message.value.trim();
  if (inputEl && textareaEl) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
  } else {
    alert('All form fields must be filled in');
  }
}
