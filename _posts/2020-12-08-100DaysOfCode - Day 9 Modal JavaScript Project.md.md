---
title: 100DaysOfCode - Day 9 Modal JavaScript Project
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

Yesterday I was doing a Ruby test, so I didn't have time for the project. Today I will try to make it up by doing 2. 

This project is based on Day6 project, since it uses slider. I get a chance to learn the concept of lightbox. I watched a great video on youtube and learned so much about lightbox. I highly recommend this video: [Simple Image Lightbox Tutorial](https://www.youtube.com/watch?v=uKVVSwXdLr0).

> This is my project: [Day9_modal_javaScript_project](https://portfolio.tsainei.com/100DaysOfCode/Day9_modal_javaScript_project/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day9_modal_javaScript_project).

After select the DOM elements I'm going to deal with, I need to make an array of item images for me to display and slide in the project.

```
let imageList = [];
let counter = 0;
images.forEach((image) => {
    imageList.push(image.src);
}) 
```

To display lightbox, I need to add a `show` class to my lightbox. Also, I need to display the image. This is the code.

```
function displayLightbox(e) {
    let image = e.target.src;
    lightboxItem.style.backgroundImage = `url(${image})`;
    lightboxContainer.classList.add('show');
    //count the index to use in the displayItem function
    counter = imageList.indexOf(image);
}
```

Once this is done, I deal with the left, right arrow button and the close button. The code looks like this:

```
const items = document.querySelectorAll('.store-item');
const images = document.querySelectorAll('.store-img');
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxItem = document.querySelector('.lightbox-item');
const leftBtn = document.querySelector('.btnLeft');
const rightBtn = document.querySelector('.btnRight');
const lightboxClose = document.querySelector('.lightbox-close');

//create an array for images
let imageList = [];
let counter = 0;
images.forEach((image) => {
    imageList.push(image.src);
}) 
//display lightbox
function displayLightbox(e) {
    let image = e.target.src;
    lightboxItem.style.backgroundImage = `url(${image})`;
    lightboxContainer.classList.add('show');
    //count the index to use in the displayItem function
    counter = imageList.indexOf(image);
}
//click the arrow to display item
function displayItem(delta) {
    counter += delta;
    if(counter < 0) {
        counter = imageList.length - 1;
    } else if (counter > imageList.length - 1) {
        counter = 0
    }
    lightboxItem.style.backgroundImage = `url(${imageList[counter]})`;
}
//close the item
function closeItem() {
    lightboxContainer.classList.remove('show');
}

leftBtn.addEventListener('click', () => displayItem(-1));
rightBtn.addEventListener('click', () => displayItem(+1));
items.forEach((item) => { item.addEventListener('click', displayLightbox)});
lightboxClose.addEventListener('click', closeItem);
```

Since this project is related to the last project, I add Day8 project code to this one. It took me quite a while to learn lightbox and deal with the images, but I find it interesting.