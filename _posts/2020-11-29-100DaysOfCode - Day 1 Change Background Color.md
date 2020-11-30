---
title: 100DaysOfCode - Day 1 Change Background Color
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

Today is the first day of my challenge. Yay! 

I'll start with Change Background Color. 

> This is my project: [Day1_change_background_color](https://portfolio.tsainei.com/100DaysOfCode/Day1_change_background_color/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day1_change_background_color).

At first, I use `queeySelector` to select the body and button tags, which I'd alter. 

```
const body = document.querySelector('body');
const button = document.querySelector('button');
```

Later, I add an `addEventListener` on button, so that I can listen to the click to run the function changeColor.

```
button.addEventListener('click', changeColor);
```

Once I have them set, I create an array `colors` which contains the colors of rainbow.

```
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
```

I write down the function changeColor to randomly change the page background color.

```
function changeColor() {
    let index = parseInt(Math.random() * colors.length);  
        body.style.backgroundColor = colors[index];
}
```

Well, it runs well! However, I notice somtimes I get the same color after several clicks. I don't like to see the same color again and again, so I add an variable thisIndex and an if statement to make sure I don't get the same color.

```
function changeColor() {
    let index = parseInt(Math.random() * colors.length);
    if(thisIndex === index) {
        changeColor();
    } else {
        body.style.backgroundColor = colors[index];
        thisIndex = index;
    } 
}
```

It works!

I somehow become more greedy. I think the 6 colors are boring, so I find this [bobspace/css_colors.js](https://gist.github.com/bobspace/2712980) to add some spice to my array. Now I have lots of colors for the background and the same color can't orrur one click after the other.

I'm sick of my boring button, too. Hence, I add the Hover Glow Effect button from [30 cool CSS Buttons – with animations!](https://webdeasy.de/en/top-css-buttons-en/) to my css.

Yay! My project is finished! This is my final javascript code:

```
const body = document.querySelector('body');
const button = document.querySelector('button');
//I found this color name array on  github: https://gist.github.com/bobspace/2712980
const colors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];

  let thisIndex;

function changeColor() {
    let index = parseInt(Math.random() * colors.length);
    if(thisIndex === index) {
        changeColor();
    } else {
        body.style.backgroundColor = colors[index];
        thisIndex = index;
    } 
}

button.addEventListener('click', changeColor);
```

This challenge is easy and I like all the adjustments I made in it. Can't wait to see the project for tomorrow!
