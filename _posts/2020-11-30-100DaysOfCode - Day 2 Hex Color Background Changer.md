---
title: 100DaysOfCode - Day 2 Hex Color Background Changer
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

In this project, I have to get random hex value created from an array of all the possible different hex values, loop through them, and concatenate 6 different values to a String that begun with the # character.

> This is my project: [Day2_hex_color_background_changer](https://portfolio.tsainei.com/100DaysOfCode/Day2_hex_color_background_changer/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day2_hex_color_background_changer).


Well, at first I misundertand the explanation and make this:

```
const body = document.querySelector('body');
const button = document.querySelector('button');
const words = document.querySelector('h1');
//I found this color name array on  github: https://gist.github.com/bobspace/2712980
const colors = [
    '#DFFF00','#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#6495ED', '#CCCCFF'];

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

button.addEventListener('click', changeColor);
```

It works well, but it's not the following the instruction. I go through the knowledge of [hex colors](https://www.codeconquest.com/hex-color-codes/) and come out with an array of hex values.

```
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
```

Once the array is set, I can write the function to change the color. I change the h1 tag value, so it can show the hex color name. Each time when the color is changed, I will set arr back to `arr = []`. Therefore, next time I can get an array of 6 items.

```
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
```

My javasctript code. It's based on the former project.

```
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
```

I love to play with the colors and I get learn about hex colors today. This is rewarding!
