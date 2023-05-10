const textInput = document.querySelector('#validation-input');

const minLength = textInput.getAttribute("data-length");

textInput.addEventListener('blur', () => {
    const isValid = textInput.value.length >= minLength;
    const className = isValid ? 'valid' : 'invalid';
    textInput.classList.add(className);
    textInput.classList.remove(isValid ? 'invalid' : 'valid');
});

