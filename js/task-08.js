const formInfo = document.querySelector(`.login-form`);

formInfo.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: { email, password },
    } = formInfo;

    if (email.value === "" || password.value === "") {
        return alert('You must fill all filds!');
    }

    const passInfo = { email: email.value, password: password.value };

    console.log(passInfo);
    formInfo.reset();
});

