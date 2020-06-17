// 1. Add a label to each of the input fields:  username, password, confirmpassword
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

username.insertAdjacentHTML(
  'beforeBegin',
  '<label for="username">Username: </label>'
);

password.insertAdjacentHTML(
  'beforeBegin',
  '<label for="password">Password: </label>'
);

confirmPassword.insertAdjacentHTML(
  'beforeBegin',
  '<label for="confirmPassword">Confirm Password: </label>'
);

// 2. Add a required validation to each input that shows an error message next to the
//    entry if it does not have any text entered
const checkInput = (event) => {
  const errorElement = Array.from(
    event.target.parentNode.querySelectorAll('span')
  );
  if (event.target.value === '' && !errorElement.length) {
    event.target.insertAdjacentHTML(
      'afterEnd',
      '<span class="text-danger">Required!</span>'
    );
  }
  if (errorElement && event.target.value !== '') {
    errorElement.forEach((elem) => elem.remove());
  }
};
username.addEventListener('blur', checkInput);
password.addEventListener('blur', checkInput);
confirmPassword.addEventListener('blur', checkInput);

// 3. Add a further validation to check if the user input in the password and confirm password inputs
//    match.  Show an error message if they do not exist

const validatePassword = (event) => {
  if (event.target.value !== password.value) {
    event.target.insertAdjacentHTML(
      'afterEnd',
      '<span class="text-danger">Passwords should match!</span>'
    );
  }
};
confirmPassword.addEventListener('blur', validatePassword);

// 4. Ensure the 'Register' button is disabled until the user has entered valid data into all the
//    input fields.  Once they have, the registration button should then be enabled.
const btn = document.querySelector('.btn');
btn.setAttribute('disabled', 'disabled');

const registrationForm = document.getElementById('registrationForm');

const enableRegistrationButton = (e) => {
  // if every input has a value then this variable is set to 'true'
  const formIsFilled = Array.from(document.querySelectorAll('input')).every(
    (input) => input.value
  );
  if (formIsFilled) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', 'disabled');
  }
};

registrationForm.addEventListener('change', enableRegistrationButton);

// 5. When a user clicks the Register button a message should be displayed informing them of a successful
//    user registration
registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const alert = document.createElement('div');
  alert.classList.add('alert', 'alert-success');
  alert.innerText = 'User registered successfully';
  registrationForm.prepend(alert);
});
