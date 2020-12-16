---
title: 100DaysOfCode - Day16 Flexbox
categories:
- 100DaysOfCode
- CSS_flexbox
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

Besides working on Day15 project, I start taking [The Complete Web Developer in 2021: Zero to Mastery](https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/). My Day16 project would be CSS related: flexbox. I'm following the lesson tutorial to make a flexbox project. 

I have basic CSS skills, but I'm lack of practice. This project help me to improve my knowledge of it.


> This is my project: [Day16_flexbox](https://portfolio.tsainei.com/100DaysOfCode/Day16_flexbox/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day16_flexbox)

### I get to learn CSS units: px, em and rem.

I find these 2 blogs helpful: [CSS units for font-size: px, em and rem](https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97) and [一次搞懂 CSS 字體單位：px、em、rem 和 % (in beautiful Taiwanese Mandarin)](https://www.oxxostudio.tw/articles/201809/css-font-size.html).

Also, I learn about CSS transitions and transforms from this blog. [CSS Transitions and Transforms for Beginners](https://thoughtbot.com/blog/transitions-and-transforms)

### Below is my quick note:

>Transforms move or change the appearance of an element, while transitions make the element smoothly and gradually change from one state to another.

They need to be with one another to make beautiful and nice animations.

We can use cleaner and faser code: transition shorthand to set the effect:

```
div {
  transition: [property] [duration] [timing-function] [delay];
}
```

Also, we have transform shorthand to deal with its effect:

```
div {
  transform: rotate(90deg) scale(2) translateY(-50%) translateX(50%);
}
```