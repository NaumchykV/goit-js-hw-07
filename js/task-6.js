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

createButton.addEventListener(
  'click',
  handleCreate,
);
destroyButton.addEventListener(
  'click',
  destroyBoxes,
);

function handleCreate() {
  const inputValue = Number(inputAmount.value);

  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
    inputAmount.value = '';
  }
}

function createBoxes(amount) {
  boxes.innerHTML = '';
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
