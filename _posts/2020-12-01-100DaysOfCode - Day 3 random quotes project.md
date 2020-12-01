---
title: 100DaysOfCode - Day 3 random quotes project
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

The weather is good today, yet I decide to stay home coding like always. During this COVID pandemic, I find "stay home and code" is a safer option.

Today I'm going to do random quotes project. Well, the knowledge is based on the former two practice, so it's rather easy and fun! 

> This is my project: [Day3_random_quotes_project](https://portfolio.tsainei.com/100DaysOfCode/Day3_random_quotes_project/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day3_random_quotes_project).

My code works well in the first try. Later I add an variable and an if statement to make sure the same quote won't show up in a row.

```
const button = document.querySelector('button');
const quote = document.getElementById('quote');
const author = document.querySelector('h5');
let thisQIndex;

function generateQuote() {
  let qIndex = Math.floor(Math.random() * quotes.length);
  if(thisQIndex === qIndex) {
    generateQuote();
  } else {
    quote.textContent = quotes[qIndex].quote;
    author.textContent = quotes[qIndex].author;
    thisQIndex = qIndex
  }
}

button.addEventListener('click', generateQuote);
```

I'm happy with the result, but I'm greedy again. Therefore, I add hex color background changer into my code.

```
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
```

I'm satisfied with the result. Maybe I will try to add some images in it to make it look better.

