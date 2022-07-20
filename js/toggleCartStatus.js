 function toggleCartStatus() {
    
    const cartWrapper =  document.querySelector('.cart-wrapper');
    const alertMessage = document.querySelector('.alert-secondary');
    const orderForm = document.querySelector('#order-form');
  if (cartOrder.items.length > 0) {
    alertMessage.style.display = 'none';
    orderForm.style.display = 'block';

  }
  else {  
        alertMessage.style.display = 'block';
        orderForm.style.display = 'none';
  }
}