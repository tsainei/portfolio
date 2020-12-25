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

let thisColor1;
let thisColor2;
let arr1 = [];
let arr2 = [];

function generateRandomColors () {
  for (let i = 0; i < 6; i++) {
    const index1 = parseInt(Math.random() * hexValues.length);
    arr1.push(hexValues[index1]);
    const index2 = parseInt(Math.random() * hexValues.length);
    arr2.push(hexValues[index2]);
  }
  thisColor1 = arr1.join('');
  thisColor2 = arr2.join('');
  if (thisColor1 === thisColor2) {
    generateRandomColors();
  } else {
    body.style.background = `linear-gradient(to right, #${thisColor1}, #${thisColor2})`;
    css.textContent = `${body.style.background}`;
    arr1 = [];
    arr2 = [];
  }
}

color1.addEventListener('input', generateColors);
color2.addEventListener('input', generateColors);
button.addEventListener('click', generateRandomColors);
