import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageTextarea = form.querySelector('[name="message"]')

const LS_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(saveFormState, 500));

function saveFormState() {
  const currentState = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };

  if (currentState.email || currentState.message) {
    localStorage.setItem(LS_KEY, JSON.stringify(currentState))
  }
}

window.addEventListener('load', loadFormState);

function loadFormState() {
  const savedState = localStorage.getItem(LS_KEY);
  if (savedState) {
    const parsedState = JSON.parse(savedState);

    if (parsedState.email) {
      emailInput.value = parsedState.email;
    }

    if (parsedState.message) {
      messageTextarea.value = parsedState.message;
    }
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const currentState = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  }

  if (currentState.email || currentState.message) {
    console.log(currentState);
    localStorage.removeItem(LS_KEY);
    emailInput.value = '';
    messageTextarea.value = '';
  }
}



