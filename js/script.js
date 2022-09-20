(function() {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#email');
  // let telephoneInput = document.querySelector('#contact-telephone');

  function showErrorMessage(input, message) {
    let container = input.parentElement;

    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage (emailInput, 'Email is a required field.');
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage (emailInput, 'You must enter a valid email adress.');
      return false;
    }

    if (value.indexOf('.') === -1) {
      showErrorMessage (emailInput, 'You must enter a valid email adress.');
      return false;
    }

    showErrorMessage (emailInput, null);
    return true;
  }

  function validateForm() {
    let isValidateEmail = validateEmail();
    return validateEmail;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Success!');
    }
  })

  email.addEventListener ('input', validateEmail);

})();
