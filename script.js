//Part-1

const app = document.getElementById('app');
const orderForm = document.querySelector('#orderForm');
const orderInput = document.querySelector('orderInput');
const orderList = document.getElementById('orderList');
const orderCount = document.querySelector('#orderCount');

const createOrderTemplate = (orderText) =>{
    const fragment = document.createDocumentFragment();
    
    const div = document.createElement('div');
    div.className = 'order-item';
    
    const span = document.createElement('span');
    span.textContent = orderText;
    
    const button = document.createElement('button');
    button.textContent = 'Completed';

    div.appendChild(span);
    div.appendChild(button);
    fragment.appendChild(div);
    return fragment;
}



