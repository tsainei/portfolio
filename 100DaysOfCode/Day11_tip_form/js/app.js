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
