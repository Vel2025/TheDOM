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

//Order count

let orderCounter = 0;
const updateCounter = () =>{
    orderCount.textContent = orderCounter;
    document.title = `Orders (${orderCounter})`;
}

//Order submission

orderForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const orderText = orderInput.value.trim();
    if(orderText.length <3){
        orderInput.classList.add('error');
        return;
    }
    const orderFragment = createOrderTemplate(orderText);
    orderList.appendChild(orderFragment);

    orderCounter++;
    updateCounter();
    orderInput.value = '';
    orderInput.classList.remove('error');
    window.scrollTo(0, document.body.scrollHeight);

})

//Order completion

orderList.addEventListener('click', (e) =>{
    if(e.target.tagName === 'BUTTON'){
        const orderDiv = e.target.parentNode;
        const orderSpan = orderDiv.firstChild;

        orderDiv.setAttribute('data-completed',
        orderSpan.classList.contains('completed').toString());

        e.target.innerHTML = orderSpan.classList.contains('completed')
        ? 'Re-Do'
        : 'Completed';
        orderCounter = document.querySelectorAll('.order-item:not([data-completed ="true"])').length;
        updateCounter();
    }
}); 
updateCounter();

