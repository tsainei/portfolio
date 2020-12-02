---
title: 100DaysOfCode - Day 4 Pass The Message Project
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

Today's project challenges me to select the input element's value from the DOM. It was fairly easy and I get to review how the form and 'subbit' work.

> This is my project: [Day4_pass_the_message_project](https://portfolio.tsainei.com/100DaysOfCode/Day4_pass_the_message_project/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day4_pass_the_message_project).

This is my first attempt. My code can't work properly. The message I add only stays for a while and it's gone!

```
const form = document.querySelector('form');
const msg = document.querySelector('#message');
const msgShow = document.querySelector('.message-content');
const warning = document.querySelector('h5');

function submitMsg() {
    if (msg.value ==='') {
        warning.classList.add('show');
        setTimeout(()=> warning.classList.remove('show'), 2000)
    } else {
        msgShow.textContent = msg.value;
        msg.value = '';
    }
}

form.addEventListener('submit', submitMsg);
```

After a bit of research, I know I have to use `preventDefault()` to cancel the default action in order for my code to work right. This is my final code:

```
const form = document.querySelector('form');
const msg = document.querySelector('#message');
const msgShow = document.querySelector('.message-content');
const warning = document.querySelector('h5');

function submitMsg(e) {
    e.preventDefault();
    if (msg.value ==='') {
        warning.classList.add('show');
        setTimeout(()=> warning.classList.remove('show'), 2000)
    } else {
        msgShow.textContent = msg.value;
        msg.value = '';
    }
}

form.addEventListener('submit', submitMsg);
```

