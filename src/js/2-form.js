const feedbackForm = document.querySelector('form.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

let localStorageData = JSON.parse(localStorage.getItem(localStorageKey))
  ? JSON.parse(localStorage.getItem(localStorageKey))
  : {};

email.value = localStorageData.hasOwnProperty('email')
  ? localStorageData.email
  : '';
message.value = localStorageData.hasOwnProperty('message')
  ? localStorageData.message
  : '';

const handleInput =(event, field) => {
  const value = event.target.value;
  localStorageData = { ...localStorageData, [field]: value };
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
}

email.addEventListener('input', event => handleInput(event, 'email'));
message.addEventListener('input', event => handleInput(event, 'message'));

const handleSubmit = event => {
  event.preventDefault();

  console.log({ email: email.value, message: message.value });
  localStorage.clear();
  form.reset();
};

feedbackForm.addEventListener('submit', handleSubmit);
