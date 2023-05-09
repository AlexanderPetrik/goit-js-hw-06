const btnDecrement = document.querySelector('button[data-action="decrement"]');

const btnIncrement = document.querySelector('button[data-action="increment"]');

const valueElement = document.getElementById('value');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;

    valueElement.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;

    valueElement.textContent = counterValue;
};




btnDecrement.addEventListener("click", decrement);

btnIncrement.addEventListener("click", increment);