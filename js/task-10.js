function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numerOfBoxes = document.querySelector('#controls>input');

const createBoxBtn = document.querySelector('button[data-create]');

const destroyBoxBtn = document.querySelector('button[data-destroy]');

const allBoxes = document.querySelector('#boxes');


const generateList = (amount) => {
  const lastElement = allBoxes.querySelector('div:last-child');
  const lastElementWidth = lastElement && lastElement.style.width;
  const lastElementHeight = lastElement && lastElement.style.height;
  const elements = [];
  const minWidth = parseInt(lastElementWidth) + 10 || 30;
  const minHeight = parseInt(lastElementHeight) + 10 || 30;
  const baseExtraWidth = 10;
  const baseExtraHeight = 10;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.background = getRandomHexColor();
    divEl.style.width = `${minWidth + baseExtraWidth * i}px`;
    divEl.style.height = `${minHeight + baseExtraHeight * i}px`;
    elements.push(divEl);
  }
  return elements;
}

const destroyBoxes = () => {
  allBoxes.innerHTML = "";
}

createBoxBtn.addEventListener('click', () => {
  const newElements = generateList(numerOfBoxes.value);
  allBoxes.append(...newElements);
})

destroyBoxBtn.addEventListener('click', destroyBoxes);
