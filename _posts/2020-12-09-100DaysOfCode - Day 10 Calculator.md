---
title: 100DaysOfCode - Day 10 Calculator
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

Today I had a job interview, I spent the whole day preparing for it. I did my best and it went very well. I still don't have time to make up the project I missed. 

This is my first to make a calculator. It is easier than I expected.

> This is my project: [Day10_Calculator](https://portfolio.tsainei.com/100DaysOfCode/Day10_Calculator/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day10_Calculator)

I get to deal with HTMLElement.dataset again to get the value of the buttons. I learn that I can display the value in the box by using the querySelector to select the input DOM and give it value. 

It's concept is well explained here: [Input Text value Property](https://www.w3schools.com/jsref/prop_text_value.asp)

> Definition and Usage

```
The value property sets or returns the value of the value attribute of a text field.

The value property contains the default value OR the value a user types in (or a value set by a script).
```

This is my final code:

```
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const clear = document.querySelector('.btn-clear');
const equal = document.querySelector('.btn-equal');

buttons.forEach((button)=> button.addEventListener('click', (e)=>{
  let value = e.target.dataset.num;
  screen.value += value;
})
)

equal.addEventListener('click', (e)=>{
  if(screen.value === '') {
    screen.value = 'Enter value';
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
})

clear.addEventListener('click', ()=>{
  screen.value = '';
})
```