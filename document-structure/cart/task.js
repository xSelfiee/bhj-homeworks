let minus = document.getElementsByClassName('product__quantity-control_dec');
let plus = document.getElementsByClassName('product__quantity-control_inc');
let basketAdd = document.getElementsByClassName('product__add');
let basket = document.getElementsByClassName('cart__products').item(0);

function add(event) {
    let plus = event.target;
    plus.previousElementSibling.textContent++;
}

function deduct(event) {
    let dec = event.target;
    if (dec.nextElementSibling.textContent <= 1) {
        dec.nextElementSibling.textContent = 1;
    } else {
        dec.nextElementSibling.textContent--;
    }
}

function addToBasket(event) {
    let productToBasket = event.target.closest('.product');

    let id = productToBasket.dataset.id;
    let productInBasket = document.createElement('div');

    productInBasket.setAttribute('class', 'cart__product');
    productInBasket.dataset.id = id;
    
    let productImage = document.createElement('img');
    productImage.setAttribute('class', 'cart__product-image');
    productImage.setAttribute('src', productToBasket.querySelector('.product__image').src);
    
    let amount = document.createElement('div');
    let number = productToBasket.querySelector('.product__quantity-value').textContent;
    amount.setAttribute('class', 'cart__product-count');
    amount.textContent = number;

    productInBasket.insertAdjacentElement('afterbegin', productImage);
    productInBasket.insertAdjacentElement('beforeend', amount);

    for (let item of basket.children) {
        if (item.dataset.id === id) {
            item.querySelector('.cart__product-count').textContent = Number(item.querySelector('.cart__product-count').textContent) + Number(number);
            return false;
        }
    }
    basket.appendChild(productInBasket);
}

for (let i = 0; i < plus.length; i++) {
    plus.item(i).addEventListener('click', add);
    minus.item(i).addEventListener('click', deduct);
    basketAdd.item(i).addEventListener('click', addToBasket);
}