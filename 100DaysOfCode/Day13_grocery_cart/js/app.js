/* eslint-disable semi */
const shoppingCarts = document.querySelectorAll('.store-item-icon');
const cartInfo = document.querySelector('#cart-info');
const cartShow = document.querySelector('#cart');

function addToCart (e) {
  e.preventDefault();
  alert('You add the item in the cart!');
  const card = this.closest('.card');
  const img = card.querySelector('img').getAttribute('src');
  const name = card.querySelector('store-item-name').innerHTML;
  const price = card.querySelector('store-item-value').innerHTML;
  cartShow.innerHTML =`<div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src="${img}" class="img-fluid rounded-circle" id="item-img" alt="">
  <div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${name}</p><span>$</span>
    <span id="cart-item-price" class="cart-item-price" class="mb-0">${price}</span></div><a href="#" id='cart-item-remove' class="cart-item-remove"><i class="fas fa-trash"></i></a></div>`;

}

shoppingCarts.forEach((shoppingCart) => shoppingCart.addEventListener('click', addToCart));
cartInfo.addEventListener('click', () => {
  cartShow.classList.toggle('show-cart');
});















