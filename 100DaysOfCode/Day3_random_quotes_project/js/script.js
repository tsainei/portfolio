const quotes = [
  {
    quote:
      'Life is about making an impact, not making an income.',
    author: '-Kevin Kruse'
  },
  {
    quote:
      'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
    author: '-John Kenneth Galbraith'
  },
  {
    quote:
      'God save me from my friends. I can protect myself from my enemies.',
    author: '-Claude Louis Hector de Villars'
  },
  {
    quote: 'The price of anything is the amount of life you exchange for it.',
    author: '-David Thoreau'
  },
  {
    quote:
      'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',
    author: '-Charles Lindbergh'
  },
  {
    quote:
      'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.',
    author: '-Tyne Daly'
  },
  {
    quote: 'I am not sure if I was the first man in space or the last dog.',
    author: '-Yuri Gagarin'
  }
]

const button = document.querySelector('button');
const quote = document.getElementById('quote');
const author = document.querySelector('h5');
const body = document.querySelector('body');
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

  
let thisQIndex;
let thisColor;
let arr = [];

function generateQuote() {
  //generate random quotes index
  let qIndex = Math.floor(Math.random() * quotes.length);
  if(thisQIndex === qIndex) {
    generateQuote();
  } else {
    quote.textContent = quotes[qIndex].quote;
    author.textContent = quotes[qIndex].author;
    thisQIndex = qIndex;
  }
  //generate hex color array
  for(let i = 0; i < 6; i++) {
    let index = parseInt(Math.random() * hexValues.length);
    arr.push(hexValues[index]);
}
//hex color name
let color = arr.join('');
  if(thisColor === color) {
    changeColor();
} else {
    body.style.backgroundColor = `#${color}`;
    thisColor = color;
    arr = [];
}
}

button.addEventListener('click', generateQuote);