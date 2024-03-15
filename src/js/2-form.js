const feedbackForm = document.querySelector('form.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

const localStorageData = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey))
  : null;

email.value = localStorageData ? localStorageData.email : '';
message.value = localStorageData ? localStorageData.message : '';

const handleSubmit = event => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify({ email, message }));

  console.log({ email, message });

  form.reset();
};

feedbackForm.addEventListener('submit', handleSubmit);
