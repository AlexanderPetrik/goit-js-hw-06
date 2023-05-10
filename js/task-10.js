function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numerOfBoxes = document.querySelector('#controls>input');

const createBoxBtn = document.querySelector('button[data-create]');

const destroyBoxBtn = document.querySelector('button[data-destroy]');

const allBoxes = document.querySelector('#boxes');


