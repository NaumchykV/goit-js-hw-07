const inputAmount = document.querySelector(
  '#controls input',
);
const createButton = document.querySelector(
  '#controls [data-create]',
);
const destroyButton = document.querySelector(
  '#controls [data-destroy]',
);
const boxesContainer =
  document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    let size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor =
      getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = inputAmount.value;
  if (amount < 1 || amount > 100) {
    // alert(
    //   'Please enter a number between 1 and 100',
    // );
    return;
  }

  destroyBoxes();
  createBoxes(amount);
  inputAmount.value = '';
});
destroyButton.addEventListener(
  'click',
  destroyBoxes,
);
