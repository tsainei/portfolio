---
title: 100DaysOfCode - Day 6 Background Image Slider
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

I hurt my right hand, so I will only do this project. Most of the time, I will let my right hand rest and heal. 

> This is my project: [Day6_background_image_slider](https://portfolio.tsainei.com/100DaysOfCode/Day6_background_image_slider/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day6_background_image_slider).

This project is based on the knowledge of Day 5, yet I get to learn that `displayPic.style.backgroundImage` is used to set the background image. In here, I use to relative path to access the picture: `displayPic.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`;`

Also, in this code, I need to remember to set the counter between 0 to pictures.length-1 to let the function loop over the pictures array. I can use if statement to deal with it.

```
if(counter < 0) {
counter = pictures.length -1;
} else if (counter > pictures.length -1) {
counter = 0;
} 
```
My code:

```
const pictures = [
  "dog-0",
  "dog-1",
  "dog-2",
  "dog-3",
  "dog-4"
];

const rightBtn = document.querySelector('.btn-right');
const leftBtn = document.querySelector('.btn-left');
const displayPic = document.querySelector('.img-container');

let counter = 0;

function picDisplay(delta) {
  counter += delta;
  if(counter < 0) {
    counter = pictures.length -1;
  } else if (counter > pictures.length -1) {
    counter = 0;
  } 
  displayPic.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`;
}

rightBtn.addEventListener('click', () => picDisplay(+1));
leftBtn.addEventListener('click', () => picDisplay(-1));
```

Well, I suddenly realize I can use absolute path to access my images, so this is the alternative code.

```
const pictures = [
  "https://images.unsplash.com/photo-1544568100-847a948585b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
  "https://images.unsplash.com/photo-1540653767498-cd679b1faa23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  "https://images.unsplash.com/photo-1527526029430-319f10814151?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
]

const rightBtn = document.querySelector('.btn-right');
const leftBtn = document.querySelector('.btn-left');
const displayPic = document.querySelector('.img-container');

let counter = 0;

function picDisplay(delta) {
  counter += delta;
  if(counter < 0) {
    counter = pictures.length -1;
  } else if (counter > pictures.length -1) {
    counter = 0;
  } 
  displayPic.style.backgroundImage = `url('${pictures[counter]}')`;
}

rightBtn.addEventListener('click', () => picDisplay(+1));
leftBtn.addEventListener('click', () => picDisplay(-1));
```








