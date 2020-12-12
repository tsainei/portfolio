/* eslint-disable semi */
const form = document.querySelector('#itemForm');
const input = document.querySelector('#itemInput');
const feedback = document.querySelector('.feedback');
const itemList = document.querySelector('.item-list');
const clearBtn = document.querySelector('#clear-list');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem (e) {
  e.preventDefault();
  const item = input.value;

  if (item.length === 0) {
    feedback.innerHTML = 'Please enter value';
    feedback.classList.add('showItem', 'alert-danger');
    setTimeout(() =>
      feedback.classList.remove('showItem', 'alert-danger')
    , 3000)
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
        <div class="item my-3">
        <h5 class="item-name text-capitalize">${todo}</h5>
        <div class="item-icons">
        <a href="#" class="complete-item mx-2 item-icon">
        <i class="far fa-check-circle"></i></a>
        <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
        <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
        </div></div>
        `
  }).join('');
  const checks = document.querySelectorAll('.complete-item');
  const deletes = document.querySelectorAll('.delete-item');
  const edits = document.querySelectorAll('.edit-item');

  deletes.forEach(del => del.addEventListener('click', deleteItem));
  checks.forEach(check => check.addEventListener('click', completeItem));
  edits.forEach(edit => edit.addEventListener('click', editItem));
}

function completeItem () {
  // let item = this;
  // while (!item.classList.contains('item')) {
  //   item = item.parentNode;
  // }
  const item = this.closest('.item');
  const h5 = item.querySelector('h5');
  if (h5.classList.contains('completed')) {
    h5.classList.remove('completed');
  } else {
    h5.classList.add('completed');
  }
}

function deleteItem () {
  let item = this;
  while (!item.classList.contains('item')) {
    item = item.parentNode;
  }
  item.remove();
  const index = items.indexOf(item);
  items.splice(index, 1);
  populateList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));
}

function editItem () {
  const item = this.closest('.item');
  const h5 = item.querySelector('h5');
  input.value = h5.innerHTML;
  item.remove();
  const index = items.indexOf(item);
  items.splice(index, 1);
  populateList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));
}

function clearItem () {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  items = [];
  populateList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));
}

form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItem);
populateList(items, itemList);
