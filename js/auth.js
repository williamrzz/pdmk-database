/* ELEMENT */

const loginName = document.getElementById("login-name");

const loginPassword = document.getElementById("login-password");

const loginButton = document.getElementById("login-button");

const registerName = document.getElementById("register-name");

const registerBadge = document.getElementById("register-badge");

const registerPassword = document.getElementById("register-password");

const registerConfirm = document.getElementById("register-confirm-password");

const registerButton = document.getElementById("register-button");
/* EVENT */

if (loginButton) {

    loginButton.addEventListener(

        "click",

        loginUser

    );

}

if (registerButton) {

    registerButton.addEventListener(

        "click",

        registerUser

    );

}
/* LOGIN */

async function loginUser() {

    console.log("Login ditekan");

}
/* REGISTER */

async function registerUser() {

    console.log("Register ditekan");

}
