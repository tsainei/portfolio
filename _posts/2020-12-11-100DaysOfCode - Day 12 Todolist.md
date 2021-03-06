---
title: 100DaysOfCode - Day 12 Todolist
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

This project is difficult than I expected. I spend days writing it. This project uses the concept of `localStorage`. Though I learned about it in JS30, I need to refresh my memory. I watch that video on JS30 again and it helps me a lot.

I learn that it's important to always review the things I write.

> This is my project: [Day12_todolist](https://portfolio.tsainei.com/100DaysOfCode/Day12_todolist/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day12_todolist)

In this todolist, I need to be able to add, check, edit, delete an item and also clear all items. Therefore, I write 4 functions to deal with them.

```
/* eslint-disable semi */
const form = document.querySelector('#itemForm');
const input = document.querySelector('#itemInput');
const feedback = document.querySelector('.feedback');
const itemList = document.querySelector('.item-list');
const clearBtn = document.querySelector('#clear-list');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem (e) {
  e.preventDefault();
  const text = input.value;
  const item = {
    text: text, //text
    done: false
  };

  if (text.length === 0) {
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
        <div class="item my-3" data-index="${i}">
        <h5 class="item-name text-capitalize ${todo.done ? 'completed' : ''}">${todo.text}</h5>
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
  const item = this.closest('.item');
  const h5 = item.querySelector('h5');
  const index = item.dataset.index;
  if (h5.classList.contains('completed')) {
    h5.classList.remove('completed');
  } else {
    h5.classList.add('completed');
    
  }
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));  
}

function deleteItem () {
  const item = this.closest('.item');
  const index = item.dataset.index;
  items.splice(index, 1);
  populateList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));
}

function editItem () {
  const item = this.closest('.item');
  const h5 = item.querySelector('h5');
  input.value = h5.innerHTML;
  deleteItem.call(this);
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
```