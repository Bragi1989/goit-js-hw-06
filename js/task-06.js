const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const expectedLength = parseInt(validationInput.getAttribute('data-length'));
  const enteredValue = validationInput.value.length;

  if (enteredValue === expectedLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});