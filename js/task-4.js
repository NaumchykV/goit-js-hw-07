const loginForm = document.querySelector(
  '.login-form',
);

loginForm.addEventListener(
  'submit',
  handleLoginFormSubmit,
);

function handleLoginFormSubmit(event) {
  event.preventDefault();

  const emailInput = loginForm.querySelector(
    'input[type="email"]',
  );
  const passwordInput = loginForm.querySelector(
    'input[type="password"]',
  );

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }
  const emailName =
    emailInput.getAttribute('name');
  const passwordName =
    passwordInput.getAttribute('name');
  const formData = {
    [emailName]: email,
    [passwordName]: password,
  };

  console.log(formData);
  loginForm.reset();
}
