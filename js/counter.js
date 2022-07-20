window.addEventListener('click', function () {
    
    let counter;
    let cartItemIndex;


        //находим обертку-родителя и DIV со счетчиком в нем
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus')
    {
        const counterWrapper = event.target.closest('.counter-wrapper')
        counter = counterWrapper.querySelector('[data-counter');

        //счетчик с логикой для корзины
  
    }

    //накходим кнопки в корзине и задаем управление массивом
    if (event.target.dataset.action === 'plusCart' || event.target.dataset.action === 'minusCart')
    {
        const cartItemId = event.target.closest('.cart-item').dataset.id;
         cartItemIndex =  _.findIndex(cartOrder.items, { 'id': cartItemId});
    }

    if (event.target.dataset.action === 'plusCart') {
        ++cartOrder.items[cartItemIndex].counter
        updateCart();

    }
if (event.target.dataset.action === 'minusCart') {

    if (cartOrder.items[cartItemIndex].counter > 1) {
        -- cartOrder.items[cartItemIndex].counter;
    }
    else {
        cartOrder.items.splice(cartItemIndex, 1)
    }
    updateCart();
}






    //проверка, является ли эkемент кнопкой + или - , и изменение количества в innerText
    if (event.target.dataset.action === 'plus') {
             ++counter.innerText;
    }
    if (event.target.dataset.action === 'minus') {

            //если больше 1 товара, уменьшаем счетчик
                 if (parseInt(counter.innerText) > 1) {
                     --counter.innerText;
                } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) == 1){
                   //проверка и удаление товара при нажатии "минус" на товаре с количеством 1
            //удаляем товар из корзины
                    event.target.closest('.cart-item').remove();
                       
                    //отображение элементов статуса корзины
                    toggleCartStatus();
                }

       
    }
})



