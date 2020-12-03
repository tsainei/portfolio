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

/*My former, not so elegant code
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
nextBtn.addEventListener('click', countPlus);*/

