---
title: 100DaysOfCode - Day13 Cart
categories:
- 100DaysOfCode
feature_image: "https://picsum.photos/2560/600?image=872"
layout: post
---

This project is based on Day12. In this project, I need to be able to add items into the shopping cart and cart information will update as well.

> This is my project: [Day13_cart](https://portfolio.tsainei.com/100DaysOfCode/Day13_cart/) and my [code](https://github.com/tsainei/portfolio/tree/main/100DaysOfCode/Day13_cart)

After I have all of these set up, I alter the CSS to let cart info always stays in sight when I scroll the page. 

I heard it's so much easier to do this project with React, Vue or other frameworks than with Vanilla JavaScript. I don't know when should I start learning these frameworks. 6 months ago I tried to learn React, but I was so defeated.

What's your suggestion?

```
const shoppingCarts = document.querySelectorAll('.store-item-icon');
const cartInfo = document.querySelector('#cart-info');
const cartShow = document.querySelector('#cart');
const items = JSON.parse(localStorage.getItem('items')) || [];

function renderItem ({ img, name, price }) {
  const total = cartShow.querySelector('.cart-total-container');
  const cartTotal = total.querySelector('#cart-total');
  const itemCount = cartInfo.querySelector('#item-count');
  const itemTotal = cartInfo.querySelector('.item-total');

  const shopItem = new DOMParser().parseFromString(`
  <div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src="${img}" class="img-fluid rounded-circle" id="item-img" alt="" style="width: 50px; height: 50px">
  <div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${name}</p><span>$</span>
    <span id="cart-item-price" class="cart-item-price" class="mb-0">${price}</span></div><a href="#" id='cart-item-remove' class="cart-item-remove"><i class="fas fa-trash"></i></a></div>
    `, 'text/html').body;
  total.before(shopItem.firstChild);
  cartTotal.textContent = `${items.map(a => parseInt(a.price, 10)).reduce((a, b) => a + b)}`;
  itemCount.textContent = `${items.length}`;
  itemTotal.textContent = `${items.map(a => parseInt(a.price, 10)).reduce((a, b) => a + b)}`;
}

items.forEach(renderItem);

function addToCart (e) {
  e.preventDefault();
  alert('You add the item in the cart!');
  const card = this.closest('.card');
  const img = card.querySelector('img').getAttribute('src');
  const name = card.querySelector('#store-item-name').textContent;
  const price = card.querySelector('#store-item-price').textContent;
  const item = { img, name, price };
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
  renderItem(item);
}

shoppingCarts.forEach((shoppingCart) => shoppingCart.addEventListener('click', addToCart));
cartInfo.addEventListener('click', () => {
  cartShow.classList.toggle('show-cart');
  cartShow.classList.toggle('fix');
});
```