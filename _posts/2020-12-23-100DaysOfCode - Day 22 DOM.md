---
title: 100DaysOfCode - Day 22 DOM
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

### Lesson learned: learn the correct posture to code before coding. 

My right has hurt for weeks. Luckily, it's not my dominant hand, so it doesn't bother me that much. However, I need both hands to code. I'll try to rest more to see if it recovers. If not, I'll need to go the doctor.

Today I review the concept of DOM. I read [DOM manipulation](https://www.theodinproject.com/courses/web-development-101/lessons/dom-manipulation) and [Day03-深入理解網頁架構：DOM ](https://ithelp.ithome.com.tw/articles/10202689) and I do an exercise from [DOM manipulation](https://www.theodinproject.com/courses/web-development-101/lessons/dom-manipulation).

I use `appendChild`, `createElement`, `setAttribute`, `textContent` and `querySelector` in this practice to alter my DOM.

As I'm doing the exercise, I learn the difference between `textContent` and `innerHTML`. [What’s Best: innerText vs. innerHTML vs. textContent](https://medium.com/better-programming/whats-best-innertext-vs-innerhtml-vs-textcontent-903ebc43a3fc) and [
innerText、innerHTML、textContent、outerHTML 的差別](https://orandigo.github.io/blog/2020/03/22/20200322-innerText-innerHTML-textContent-outerHTML/).


> This is my project: [Day22_DOM](https://portfolio.tsainei.com/100DaysOfCode/Day22_DOM/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day22_DOM)

```
const container = document.querySelector('#container');

const p1 = document.createElement('p');
p1.style.cssText = 'color: red';
p1.textContent = "Hey I’m red!";

const h3 = document.createElement('h3');
h3.style.cssText = 'color:blue';
h3.textContent = "I’m a blue h3!";

container.appendChild(p1);
container.appendChild(h3);

const blackDiv = document.createElement('div');
blackDiv.setAttribute('style', 'color: black; background: pink');

const h1 = document.createElement('h1');
h1.textContent = "I’m in a div";

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";
blackDiv.appendChild(h1);
blackDiv.appendChild(p2);

container.appendChild(blackDiv);
```