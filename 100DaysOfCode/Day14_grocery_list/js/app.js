/* eslint-disable semi */
const form = document.querySelector('#input-form');
const clearBtn = document.querySelector('.clearBtn');
const input = document.querySelector('#input-value');
const itemList = document.querySelector('.list-items');
const feedback = document.querySelector('.feedback');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem (e) {
  e.preventDefault();
  const text = input.value;
  const item = text;
  if (text.length === 0) {
    feedback.innerHTML = 'Please enter value';
    feedback.classList.add('showItem', 'alert-danger');
    setTimeout(() =>
      feedback.classList.remove('showItem', 'alert-danger')
    , 3000);
  } else {
    items.push(item);
    populateList(items, itemList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }
}

function populateList (todos = [], todolist) {
  todolist.innerHTML = todos.map((todo, i) => {
    return `
        <div class="item my-3 d-flex justify-content-between p-2" data-index = "${i}">
        <h5 class="item-title text-capitalize">${todo}</h5>
        <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
       </div>`
  }).join('');
  const removes = document.querySelectorAll('.remove-icon');
  removes.forEach(remove => remove.addEventListener('click', deleteItem));
}

function deleteItem () {
  const item = this.closest('.item');
  const index = item.dataset.index;
  items.splice(index, 1);
  populateList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));
}

function clearAll () {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  items = [];
  populateList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));
}

form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearAll);
populateList(items, itemList);
