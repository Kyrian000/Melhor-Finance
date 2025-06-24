const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document. getElementById('error-message')
form.addEventListener('submit', (e) => {
    let errors = [];
    
    if(firstname_input){
        // if we have a firstname input, then we are in the signup page
        errors = getSignupFormErrors(
            firstname_input.value, 
            email_input.value, 
            password_input.value,
            repeat_password_input.value
        );
    } else {
        // else we are in the Login page
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }
    
    if(errors.length > 0){
        // if there are any errors in the both forms
        e.preventDefault();
        // You might want to display the errors to the user here
        console.log(errors);
        error_message.innerText = errors.join(". ")
    }
});

function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = [];

    if(firstname === '' || firstname == null){
        errors.push('Firstname is required');
        firstname_input.parentElement.classList.add('incorrect');
    }
    if(email === '' || email == null){
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if(password === '' || password == null){
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if(password !== repeatPassword) {
        errors.push('Passwords do not match');
        repeat_password_input.parentElement.classList.add('incorrect');
    }
    if (password < 8) {
        errors.push('Password must contain at least 8 characters')
    }
    return errors; 
}

function getLoginFormErrors(email, password) {
    let errors = [];

    if(email === '' || email == null){
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    if(password === '' || password == null){
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    
    return errors; 
}


// Add input event listeners to remove error styling when user types
const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null);
allInputs.forEach(input => {
    input.addEventListener('input', () => {
    if (input.parentElement.classList.contains('incorrect')) {
        input.parentElement.classList.remove('incorrect');
        error_message.innerText = ''
        }
    })
});