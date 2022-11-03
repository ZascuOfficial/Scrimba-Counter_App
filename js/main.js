let count = 0;

const counterElement = document.querySelector('#counter-element');
const recordsElement = document.querySelector('#records-element');
const incrementButton = document.querySelector('#increment-button');
const resetButton = document.querySelector('#reset-button');

function increment() {
  count++;

  counterElement.textContent = count;
}

function reset() {
  let countString = count + " - ";

  if (count !== 0) {
    recordsElement.textContent += countString;
  }

  count = 0;
  counterElement.textContent = count;
}