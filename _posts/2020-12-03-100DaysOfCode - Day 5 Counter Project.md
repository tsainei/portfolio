---
title: 100DaysOfCode - Day 5 Counter Project
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

The weather is as good as yesterday, so I decide to do the laundry. While waiting for the washing machine to finish, I do this project.

> This is my project: [Day5_counter_project](https://portfolio.tsainei.com/100DaysOfCode/Day5_counter_project/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day5_counter_project).

At first, I find it easy, but somehow my code is not so elegent. I deal with the two buttons separately. There must be a way for me to deal with them together.

```
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const counter = document.querySelector('#counter');
let count = 0;

function countMinus() {
  count--;
  counter.textContent = count;
  if(count < 0) {
    counter.style.color = "red";
  } else if(count > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "black";
  }
}

function countPlus() {
  count++;
  counter.textContent = count;
  if(count < 0) {
    counter.style.color = "red";
  } else if(count > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "black";
  }
}

prevBtn.addEventListener('click', countMinus);
nextBtn.addEventListener('click', countPlus);
```

I tend to complicate the things. After struggling for a while, my husband points out I can use the parameter to alter the count. Voilà! It's that simple!

```
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const counter = document.querySelector('#counter');
let count = 0;

function dealCount(delta) {
  count += delta;
  counter.textContent = count;
  if(count < 0) {
    counter.style.color = "red";
  } else if(count > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "black";
  }
}

prevBtn.addEventListener('click', () => dealCount(-1));
nextBtn.addEventListener('click', () => dealCount(+1));
```

After learning so many things, I start to complicate things. However, I should always remember to try to find easy ways to solve problems.



