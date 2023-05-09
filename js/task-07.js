const control = document.querySelector('#font-size-control');

const text = document.querySelector('#text');


control.addEventListener('change', () => {
    text.style.fontSize = `${control.value}px`;
});

