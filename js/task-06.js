const textInput = document.querySelector('#validation-input');

const requiredLength = textInput.getAttribute("data-length");

textInput.addEventListener('blur', () => {
    const isValid = textInput.value.length === +requiredLength;
    const className = isValid ? 'valid' : 'invalid';
    textInput.classList.add(className);
    textInput.classList.remove(isValid ? 'invalid' : 'valid');
});



