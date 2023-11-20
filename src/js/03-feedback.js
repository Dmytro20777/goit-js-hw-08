import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageTextarea = form.querySelector('[name="message"]');

const LS_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(saveFormState, 500));

function saveFormState() {
  const currentState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(LS_KEY, JSON.stringify(currentState));
}

window.addEventListener('load', loadFormState);

function loadFormState() {
  const savedState = localStorage.getItem(LS_KEY);
  if (savedState) {
    const parsedState = JSON.parse(savedState);
    emailInput.value = parsedState.email;
    messageTextarea.value = parsedState.message;
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log({
    email: emailInput.value,
    message: messageTextarea.value,
  });
  localStorage.removeItem(LS_KEY);
  emailInput.value = '';
  messageTextarea.value = '';
}




