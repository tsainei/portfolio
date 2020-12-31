/* eslint-disable semi */
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector('body');
const button = document.querySelector('button');

function generateColors () {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = `${body.style.background}`;
}

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getColor () {
  const arr = [];
  for (let i = 0; i < 6; i++) {
    const index = parseInt(Math.random() * hexValues.length);
    arr.push(hexValues[index]);
  }
  return arr.join('');
}

function generateRandomColors () {
  const thisColor1 = getColor();
  const thisColor2 = getColor();
  if (thisColor1 === thisColor2) {
    generateRandomColors();
  } else {
    body.style.background = `linear-gradient(to right, #${thisColor1}, #${thisColor2})`;
    css.textContent = `${body.style.background}`;
  }
}

color1.addEventListener('input', generateColors);
color2.addEventListener('input', generateColors);
button.addEventListener('click', generateRandomColors);
