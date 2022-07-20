//стоимость доставки
const deliveryPrice = 200;

function updateTotalSum() {
    const deliveryEl = document.querySelector('.delivery-cost')
    cartOrder.totalSum = 0;

    //перебор массива и подсчет суммы
    for (i = 0; i < cartOrder.items.length; i++) {
        cartOrder.totalSum += cartOrder.items[i].price*cartOrder.items[i].counter;
        console.log(cartOrder.totalSum)
    }

    //подсчет суммы заказа и прибавление доставки в случае суммы заказа меньше 700р
    if (cartOrder.totalSum >= 700) {
        deliveryEl.classList.add('free')
        deliveryEl.innerText = 'бесплатно'
        totalPriceElem.innerText = cartOrder.totalSum ;

    } else if (cartOrder.totalSum == 0) {
        deliveryEl.innerText = 'Бесплатно от 700 ₽'
        totalPriceElem.innerText = '0'
        deliveryEl.classList.add('free')

    }
    
    else {
        deliveryEl.classList.remove('free')
        deliveryEl.innerText = `${deliveryPrice} ₽`
        totalPriceElem.innerText = cartOrder.totalSum + deliveryPrice;

    }
}