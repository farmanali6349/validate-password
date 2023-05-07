const passwordField = document.getElementById('password-field');
const confirmField = document.getElementById('confirm-field');

// Regular Expressions
const uppercase = /[A-Z]/;
const lowercase = /[a-z]/;
const numbers = /[0-9]/;
const specialCharacters = /[!@#$%^&*()]/;



// --------------- FUNCTION TO TOGGLE SHOW HIDE THE PASSWORD -----------------------
function showHidePassword(img, input) {

    let inputField = document.getElementById(input);
    let image = document.getElementById(img);

    if (inputField.type == 'password') {
        inputField.type = 'text'
        image.src = '/RESOURCES/images/show.svg';
    } else {
        inputField.type = 'password'
        image.src = '/RESOURCES/images/hide.svg';
    }

}

// Adding Event Listener to the inputfield
passwordField.addEventListener('input', check);
confirmField.addEventListener('input', check);

function check() {

    const password = passwordField.value;
    const confirm = confirmField.value;


    // Checking the both fields (password and cofirm field)
    if((password == confirm) && (password != '') && (confirm != '')) {
        const image = document.querySelector('.same-para>img');
        image.src = '/RESOURCES/images/tick.svg';
    } else {
        const image = document.querySelector('.same-para>img');
        image.src = '/RESOURCES/images/cross.svg';
    }

    // Checking the special characters
    if(specialCharacters.test(password)) {
        const image = document.querySelector('.special-para>img');
        image.src = '/RESOURCES/images/tick.svg';
    } else {
        const image = document.querySelector('.special-para>img');
        image.src = '/RESOURCES/images/cross.svg';
    }

    // Checking the uppercase characters
    if(uppercase.test(password)) {
        const image = document.querySelector('.uppercase-para>img');
        image.src = '/RESOURCES/images/tick.svg';
    } else {
        const image = document.querySelector('.uppercase-para>img');
        image.src = '/RESOURCES/images/cross.svg';
    }
    
    // Checking the lowercase characters
    if(lowercase.test(password)) {
        const image = document.querySelector('.lowercase-para>img');
        image.src = '/RESOURCES/images/tick.svg';
    } else {
        const image = document.querySelector('.lowercase-para>img');
        image.src = '/RESOURCES/images/cross.svg';
    }

    // Checking the numbers characters
    if(numbers.test(password)) {
        const image = document.querySelector('.numbers-para>img');
        image.src = '/RESOURCES/images/tick.svg';
    } else {
        const image = document.querySelector('.numbers-para>img');
        image.src = '/RESOURCES/images/cross.svg';
    }

    // Checking the numbers length
    if(password.length >= 8) {
        const image = document.querySelector('.length-para>img');
        image.src = '/RESOURCES/images/tick.svg';
    } else {
        const image = document.querySelector('.length-para>img');
        image.src = '/RESOURCES/images/cross.svg';
    }
}