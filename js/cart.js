// var _ = require('lodash');

const cartWrapper = document.querySelector('.cart-wrapper');
const totalPriceElem = document.querySelector('.total-price');

const cartOrder = {
    items: [],
    totalSum: 0
}


//навешиваем прослушку на кнопку "добавить в корзину"
window.addEventListener('click', function () {
    //проверяем, есть ли атрибут у элемента, по которому кликаем
    if (event.target.hasAttribute('data-cart')) {
        //находим карточку товара, по которой был клик
        const card = event.target.closest('.card');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: parseInt(card.querySelector('.price__currency').innerText),
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            counter: parseInt(card.querySelector('[data-counter]').innerText),

        };
        //проверяем есть ли добавляемый элемент в корзину
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        //если есть в корзине
        if (itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]');
            const targetIndex = _.findIndex(cartOrder.items, {
                'id': productInfo.id
            });
            cartOrder.items[targetIndex].counter = cartOrder.items[targetIndex].counter + productInfo.counter;
            console.log('найден targetEl :', cartOrder.items[targetIndex]);
        } else { //если нет
            cartOrder.items.push(productInfo)
        }
        card.querySelector('[data-counter').innerText = '1';
        updateCart();
    }
})

//отображение элементов статуса корзины
function updateCart() {
    cartWrapper.innerHTML = "";
    cartOrder.items.map((item, index) => {
        newCartItem = `
        <div class="cart-item" data-id="${item.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${item.imgSrc}" alt="">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${item.title}</div>
                <div class="cart-item__weight">${item.itemsInBox} шт. / ${item.weight}г.</div>
  
                <!-- cart-item__details -->
                <div class="cart-item__details">
                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minusCart">-</div>
                        <div class="items__current" data-counter="">${item.counter}</div>
                        <div class="items__control" data-action="plusCart">+</div>
                    </div>
                    <div class="price">
                        <div class="price__currency">${item.price}</div>
                    </div>
                </div>
                <!-- // cart-item__details -->
            </div>
        </div>
    </div>
    `;
        return (
            cartWrapper.insertAdjacentHTML('beforeend', newCartItem)
        );

    });
    toggleCartStatus();
    updateTotalSum();

}