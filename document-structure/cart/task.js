const productsBtnDec = document.querySelectorAll('.product__quantity-control_dec');
const productsBtnInc = document.querySelectorAll('.product__quantity-control_inc');

const addsProduct = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');

productsBtnDec.forEach((elem) => {
    elem.onclick = (event) => {
        if (elem.closest('.product__controls').querySelector('.product__quantity-value').textContent > 1)
            elem.closest('.product__controls').querySelector('.product__quantity-value').textContent--;
    }
});

productsBtnInc.forEach((elem) => {
    elem.onclick = (event) => {
        elem.closest('.product__controls').querySelector('.product__quantity-value').textContent++;
    }
});

addsProduct.forEach((elem) => {
    elem.onclick = (event) => {
        const cartProducts = cart.querySelectorAll('.cart__product');
        const arrSearch = Array.from(cartProducts).find(item => item.dataset.id == elem.closest('.product').dataset.id);
        const addProduct = elem.closest('.product');
        const addProductCount = elem.closest('.product__quantity').querySelector('.product__quantity-value').textContent;
        if (!arrSearch) {
            cart.insertAdjacentHTML("beforeEnd",
                `<div class="cart__product" data-id="${addProduct.dataset.id}">
                <img class="cart__product-image" src="${addProduct.querySelector('.product__image').src}">
                <div class="cart__product-count">${addProductCount}</div>
                </div>`
            );
        } else {
            cartProducts.forEach(item => {
                if (item.dataset.id == addProduct.dataset.id) {
                    item.querySelector(".cart__product-count").textContent = +item.querySelector(".cart__product-count").textContent +(+addProductCount);
                }
            });
        }
    }
});