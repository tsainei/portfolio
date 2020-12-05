---
title: 100DaysOfCode - Day 7 testimonial project
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

Today my hand doesn't become better. I need to rest more. Today's project is based on 2 projects I did before. 

> This is my project: [Day7_testimonial_project](https://portfolio.tsainei.com/100DaysOfCode/Day7_testimonial_project/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day7_testimonial_project).

It's doesn't take me long to do the project. I deal with the customer's reviews by making a nested array.

```
const customers = [
  ['John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?'],
  ['Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'],
  ['Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'],
  ['Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text'],
  ['Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.']
]
```

After I finish my code, I notice it didn't work. Turns out I put the function's result into the `addEventListner` not the function.

```
//it is wrong to do like this
nextBtn.addEventListener('click', reviewDisplay(+1));
//it is right to do so
nextBtn.addEventListener('click', () => reviewDisplay(+1));
```

My final code is like this. I'm happy with the result.

```
const customerName = document.querySelector('#customer-name');
const customerPic = document.querySelector('#customer-img');
const customerText = document.querySelector('#customer-text');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

let index = 0;

const customers = [
  ['John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?'],
  ['Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'],
  ['Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'],
  ['Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text'],
  ['Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.']
]

function reviewDisplay(delta) {
    index += delta;
    if(index < 0) {
        index = customers.length-1;
    } else if (customers.length -1 < index) {
        index = 0;
    }
    customerPic.src = `./img/customer-${index}.jpg`;
    customerName.textContent = customers[index][0];
    customerText.textContent = customers[index][1];
}

nextBtn.addEventListener('click', () => reviewDisplay(+1));
prevBtn.addEventListener('click', () => reviewDisplay(-1));
```

