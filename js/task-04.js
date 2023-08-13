const counterValue = 0; // Початкове значення лічильника

const valueSpan = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

// Функція для збільшення значення лічильника
incrementButton.addEventListener('click', () => {
  valueSpan.textContent = counterValue + 1;
});

// Функція для зменшення значення лічильника
decrementButton.addEventListener('click', () => {
  valueSpan.textContent = counterValue - 1;
});