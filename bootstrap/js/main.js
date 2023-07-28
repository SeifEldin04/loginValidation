// // var myLogIn = document.querySelector('.myLogIn');
// // var mySignUpAcc = document.querySelector('.signUpAcc')

// // var mySignUp = document.querySelector('.mySignUp');
// // var mySignInAcc = document.querySelector('.signInAcc')

// var nameInp = document.querySelector('input[name="name"]');
// var emailInp = document.querySelector('input[name="email"]');
// var passInp = document.querySelector('input[name="password"]');

// var signUpBtn = document.querySelector(".mySign");

// var currentEmail = document.querySelector('input[name="currentEmail"]');
// var currentPassword = document.querySelector('input[name="currentPassword"]');

// var logInBtn = document.querySelector(".myLogin");

// var nameRegex = /[\w]{2,9}/;
// var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// var dataContainer = [];

// if (localStorage.getItem("users") != null) {
//     dataContainer = JSON.parse(localStorage.getItem("users"));
// }
// else {
//     dataContainer = [];
// }

// // mySignUpAcc.addEventListener('click' , function(){
// //     myLogIn.classList.replace('d-block' , 'd-none');
// //     mySignUp.classList.replace('d-none' , 'd-block');
// // })

// // mySignInAcc.addEventListener('click' , function(){
// //     myLogIn.classList.replace('d-none' , 'd-block');
// //     mySignUp.classList.replace('d-block' , 'd-none');
// // })

// function signUpUser() {
//     if (nameRegex.test(nameInp.value) && emailRegex.test(emailInp.value) && passwordRegex.test(passInp.value)) {
//         var userData = {
//             name: nameInp.value,
//             email: emailInp.value,
//             password: passInp.value
//         }
//         dataContainer.push(userData);
//         localStorage.setItem("users", JSON.stringify(userData));
//         clearForm();
//     }
//     else {
//         window.alert(`Your Name or Email or Password is not valid, Please follow the rules below :

//         1 - Your name must contain at least 2 characters
//         2 - Email must be a valid one
//         3 - Password must contain at least one special character (@#$%^&*) , 8 characters`)
//     }
// }

// signUpBtn.addEventListener("click", function () {
//     signUpUser();
// })

// nameInp.addEventListener('input', function () {
//     if (nameRegex.test(nameInp.value)) {
//         nameInp.classList.remove("is-invalid");
//         nameInp.classList.add("is-valid");
//     }
//     else {
//         nameInp.classList.add("is-invalid")
//         nameInp.classList.remove("is-valid");
//     }
// })

// emailInp.addEventListener("input", function () {
//     if (emailRegex.test(emailInp.value)) {
//         emailInp.classList.remove("is-invalid");
//         emailInp.classList.add("is-valid");
//     }
//     else {
//         emailInp.classList.add("is-invalid")
//         emailInp.classList.remove("is-valid");
//     }
// })

// passInp.addEventListener("input", function () {
//     if (passwordRegex.test(passInp.value)) {
//         passInp.classList.remove("is-invalid");
//         passInp.classList.add("is-valid");
//     }
//     else {
//         passInp.classList.add("is-invalid")
//         passInp.classList.remove("is-valid");
//     }
// })

// function clearForm() {
//     nameInp.value = "";
//     emailInp.value = "";
//     passInp.value = "";
// }

// // function logInUser() {
// //     var user = dataContainer.find(userData[emailInp]);
// //     if (currentEmail == user) {
// //         console.log("hello");
// //     }
// // }

// // logInBtn.addEventListener('click', function (e) {
// //     var currentEmail = e.target.currentEmail.value;
// //     var currentPassword = e.target.currentPassword.value;

// //     var user = dataContainer.find( user => user.currentEmail === currentEmail);

// //     if(!user){
// //         window.alert("hello");
// //     }
// //     else if(user.currentPassword !== currentPassword){
// //         window.alert("hellooo");
// //     }
// //     else{
// //         window.alert("hellooowwwwwwww");
// //     }
// // })

// // logInBtn.addEventListener('click', function () {
// //     logInUser();
// // })










// // // Define an array to store user data
// // let users = [];

// // // Check if there are any existing users stored in local storage
// // if (localStorage.getItem('users')) {
// //   users = JSON.parse(localStorage.getItem('users'));
// // }

// // // Get the login and signup elements
// // const loginElement = document.querySelector('#login');
// // const signupElement = document.querySelector('#signup');

// // // Get the login and signup links
// // const loginLink = document.querySelector('#login-link');
// // const signupLink = document.querySelector('#signup-link');

// // // Get the home element
// // const homeElement = document.querySelector('#home');

// // // Get the username element
// // const usernameElement = document.querySelector('#username');

// // // Add an event listener to the login link
// // loginLink.addEventListener('click', (event) => {
// //   event.preventDefault();

// //   // Hide the signup element and show the login element
// //   signupElement.style.display = 'none';
// //   loginElement.style.display = 'block';
// // });

// // // Add an event listener to the signup link
// // signupLink.addEventListener('click', (event) => {
// //   event.preventDefault();

// //   // Hide the login element and show the signup element
// //   loginElement.style.display = 'none';
// //   signupElement.style.display = 'block';
// // });

// // // Get the login form element
// // const loginForm = loginElement.querySelector('form');

// // // Add an event listener to the submit button on the login form
// // loginForm.addEventListener('submit', (event) => {
// //   event.preventDefault();

// //   // Get the values of the email and password fields
// //   const email = loginForm.email.value;
// //   const password = loginForm.password.value;

// //   // Check if the email and password are valid
// //   const user = users.find(user => user.email === email);

// //   if (!user) {
// //     // The email is not registered, show an alert
// //     alert('Invalid email. Please try again or register for a new account.');
// //   } else if (user.password !== password) {
// //     // The password is incorrect, show an alert
// //     alert('Incorrect password. Please try again.');
// //   } else {
// //     // The email and password are valid, show the welcome window
// //     loginElement.style.display = 'none';
// //     homeElement.style.display = 'block';
// //     usernameElement.textContent = user.username;
// //   }
// // });

// // // Get the signup form element
// // const signupForm = signupElement.querySelector('form');

// // // Add an event listener to the submit button on the signup form
// // signupForm.addEventListener('submit', (event) => {
// //   event.preventDefault();

// //   // Get the values of the username, email, and password fields
// //   const username = signupForm.username.value;
// //   const email = signupForm.email.value;
// //   const password = signupForm.password.value;

// //   // Check if the email is already registered
// //   const user = users.find(user => user.email === email);

// //   if (user) {
// //     // The email is already registered, show an alert
// //     alert('That email is already registered. Please try logging in or using a different email.');
// //   } else {
// //     // The email is not registered, add the user to the array and store it in local storage
// //     const newUser = {
// //       username,
// //       email,
// //      password
// //     };
// //     users.push(newUser);
// //     localStorage.setItem('users', JSON.stringify(users));

// //     // Show the welcome window
// //     signupElement.style.display = 'none';
// //     homeElement.style.display = 'block';
// //     usernameElement.textContent = username;
// //   }
// // });

// // // Validate an email address using a regular expression
// // function validateEmail(email) {
// //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //   return regex.test(email);
// // }


// masek beha el div bta3 el login 
var myLogIn = document.querySelector('.myLogIn');

var currentEmail = document.querySelector('input[name="currentEmail"]');
var currentPassword = document.querySelector('input[name="currentPassword"]');

var mySignUpAcc = document.querySelector('.mySignUpAcc');

var myLogInBtn = document.querySelector('.myLogInBtn');

// masek beha el div bta3 el sign up 
var mySignUp = document.querySelector('.mySignUp');

var nameInp = document.querySelector('input[name="name"]');
var emailInp = document.querySelector('input[name="email"]');
var passInp = document.querySelector('input[name="password"]');

var mySignInAcc = document.querySelector('.mySignInAcc');

var mySignUpBtn = document.querySelector('.mySignUpBtn');


var nameRegex = /[\w]{2,9}/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

var dataContainer = [];

if (localStorage.getItem("users") != null) {
    dataContainer = JSON.parse(localStorage.getItem("users"));
}
else {
    dataContainer = [];
}

function signUpUser() {
    if (nameRegex.test(nameInp.value) && emailRegex.test(emailInp.value) && passwordRegex.test(passInp.value)&&checkDuplication(emailInp.value)==true) {
        var userData = {
            name: nameInp.value,
            email: emailInp.value,
            password: passInp.value
        }
        dataContainer.push(userData);
        localStorage.setItem("users", JSON.stringify(dataContainer));
        clearForm();
    }
    else {
        window.alert(`Your Name or Email or Password is not valid, Please follow the rules below :
        1 - Your name must contain at least 2 characters
        2 - Email must be a valid one
        3 - Password must contain at least one special character (@#$%^&*) , 8 characters`)
    }
}

mySignUpBtn.addEventListener('click', function () {
    signUpUser();
})

nameInp.addEventListener('input', function () {
    if (nameRegex.test(nameInp.value)) {
        nameInp.classList.remove("is-invalid");
        nameInp.classList.add("is-valid");
    }
    else {
        nameInp.classList.add("is-invalid")
        nameInp.classList.remove("is-valid");
    }
})

emailInp.addEventListener("input", function () {
    if (emailRegex.test(emailInp.value)) {
        emailInp.classList.remove("is-invalid");
        emailInp.classList.add("is-valid");
    }
    else {
        emailInp.classList.add("is-invalid")
        emailInp.classList.remove("is-valid");
    }
})

passInp.addEventListener("input", function () {
    if (passwordRegex.test(passInp.value)) {
        passInp.classList.remove("is-invalid");
        passInp.classList.add("is-valid");
    }
    else {
        passInp.classList.add("is-invalid")
        passInp.classList.remove("is-valid");
    }
})

function clearForm() {
    nameInp.value = "";
    emailInp.value = "";
    passInp.value = "";
}

mySignUpAcc.addEventListener('click', function () {
    myLogIn.classList.replace('d-block', 'd-none');
    mySignUp.classList.replace('d-none', 'd-block');
})

mySignInAcc.addEventListener('click', function () {
    myLogIn.classList.replace('d-none', 'd-block');
    mySignUp.classList.replace('d-block', 'd-none');
})
function checkDuplication(test) {
    for (var i = 0; dataContainer.length; i++) {
        if (dataContainer[i].email == (test)) {
            console.log("hello");
            return false
        }
        else {
            console.log("mashyy");
            return true;
        }
    }
}   

