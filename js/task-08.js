const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault(); // Забороняємо стандартну поведінку форми (перезавантаження сторінки)

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (email.trim() === '' || password.trim() === '') {
    alert('All fields must be filled out');
    return; // Виходимо з функції, не створюючи об'єкт
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  loginForm.reset(); // Очищаємо поля форми
});
