const body = document.querySelector('body');
const button = document.querySelector('button');
const words = document.querySelector('h1');
//I found this color name array on  github: https://gist.github.com/bobspace/2712980
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let thisColor;
let arr = [];

function changeColor() {
    for(let i = 0; i < 6; i++) {
        let index = parseInt(Math.random() * hexValues.length);
        arr.push(hexValues[index]);
    }
    let color = arr.join('');
    if(thisColor === color) {
        changeColor();
    } else {
        body.style.backgroundColor = `#${color}`;
        thisColor = color;
        words.textContent = `HEX COLOR: #${color}`;
        arr = [];
    } 
}

button.addEventListener('click', changeColor);

/*The former codes I wrote:

const body = document.querySelector('body');
const button = document.querySelector('button');
const words = document.querySelector('h1');
//I found this color name array on  github: https://gist.github.com/bobspace/2712980
const colors = [
    '#DFFF00','#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#6495ED', '#CCCCFF'
  ];

  let thisIndex;

function changeColor() {
    let index = parseInt(Math.random() * colors.length);
    if(thisIndex === index) {
        changeColor();
    } else {
        body.style.backgroundColor = colors[index];
        thisIndex = index;
        words.textContent = `HEX COLOR: ${colors[index]}`;
    } 
}

button.addEventListener('click', changeColor);*/