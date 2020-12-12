---
title: 100DaysOfCode - Day 11 Tip Form
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

This project takes me this whole morning to finish. 

This project isn't useful in my daily life, since in Taiwan and Spain usually we are not obliged to pay tips.

In Taiwan, some places include the tips in bills, so we don't need to worry about them. To be honest, our services in Taiwan are much better than many countries, yet we don't pay tips. It is a bit unfair to the workers. 

Therefore, I put an option `No Tip` in my project. Now it's more useful in my case.

> This is my project: [Day11_tip_form](https://portfolio.tsainei.com/100DaysOfCode/Day11_tip_form/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day11_tip_form)

I set input min and max limit to ensure the people number and bill amount will not be less than 0, like this:

```
 <input type="number" class="form-control form-control-lg" id="input-bill" step=".01" min="0.01" max="10000">
```

Once I have the `index.html` set up, I get to work on my JS code. I remember to use `setTimeout` to make sure my code will run at the time the description suggests.

I need to show a warning if I leave people number or bill amount blank, so I make a `isFeedback` Boolean to control it.

Unlike the example I found online, I put the warning and display result code all in one function. My code is shorter than that. I'm proud of myself.

```
/*  In the case of tip form calculator above, you should be able to use the calculator to enter an amount of a bill, the number of people who will split the bill, and a selection as to how the service went.
    If a user forgets to add input or if the input is blank (or less than zero), feedback should be alerted to the user and then go away after 5 seconds.
    During the calculation, a GIF animation should show for a couple seconds before the user's answer show up on the screen.
    After about 5 seconds, the calculator should reset all forms.*/


const bill = document.querySelector('#input-bill');
const people = document.querySelector('#input-users');
const service = document.querySelector('#input-service');
const resultDOM = document.querySelector('.results')
const tipAmountDOM = document.querySelector('#tip-amount');
const totalAmountDOM = document.querySelector('#total-amount');
const eachPersonDOM = document.querySelector('#person-amount');
const loader = document.querySelector('.loader');
const feedback = document.querySelector('.feedback');
const form = document.querySelector('form');
let isfeedback = false;

function displayResult(e) {
  //prevent refresh the page
  e.preventDefault();
  //if bill or people is blank, show a warning
  if(bill.value === '' || people.value === '') {
    isfeedback = true;
    feedback.classList.add('showItem', 'alert-danger');
    feedback.innerHTML = `<p>Don't lave any blanks</p>`;
    } 
    //the warning goes away in 5 seconds
    setTimeout(()=>{
      if(isfeedback === true) {
        feedback.classList.remove('showItem','alert-danger');
      } 
    }, 5000);
  
  const tipAmount = Number(bill.value)*service.value;
  const totalAMount = tipAmount + Number(bill.value);
  const eachPerson = totalAMount/ people.value;
    //when submit the data, show the animation
    if(isfeedback === false) {
      loader.classList.add('showItem');
    }
    //after 2 seconds, remove the animation and show the calculation
    setTimeout(() => {
      if(isfeedback === false) {
        loader.classList.remove('showItem');
        tipAmountDOM.textContent = `${tipAmount.toFixed(2)}`;
        totalAmountDOM.textContent = `${totalAMount.toFixed(2)}`;
        eachPersonDOM.textContent = `${eachPerson.toFixed(2)}`;
        resultDOM.classList.add('showItem');
      }
    }, 2000);
    //after 5 seconds, remove the result and set input values back to default
    setTimeout(() => {
    if(isfeedback === false) {
      bill.value = '';
      people.value = '';
      service.value = '0';
      resultDOM.classList.remove('showItem');
    }}, 7000);
}

form.addEventListener('submit', displayResult);
```

