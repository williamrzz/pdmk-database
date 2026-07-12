// Ganti Login ke Register

const loginForm = document.getElementById("login-form");

const registerForm = document.getElementById("register-form");

const showRegister = document.getElementById("show-register");

const showLogin = document.getElementById("show-login");

showRegister.addEventListener("click", function (event) {

    event.preventDefault();

    loginForm.classList.add("hidden");

    registerForm.classList.remove("hidden");

});

showLogin.addEventListener("click", function (event) {

    event.preventDefault();

    registerForm.classList.add("hidden");

    loginForm.classList.remove("hidden");

});
// Password Login

const loginPassword = document.getElementById("login-password");

const loginToggle = document.getElementById("login-toggle");

if (loginToggle) {

    loginToggle.addEventListener("click", function () {

        if (loginPassword.type === "password") {

            loginPassword.type = "text";

            loginToggle.textContent = "🙈";

        }

        else {

            loginPassword.type = "password";

            loginToggle.textContent = "👁";

        }

    });

}
// Password Register

const registerPassword = document.getElementById("register-password");

const registerToggle = document.getElementById("register-toggle");

if (registerToggle) {

    registerToggle.addEventListener("click", function () {

        if (registerPassword.type === "password") {

            registerPassword.type = "text";

            registerToggle.textContent = "🙈";

        }

        else {

            registerPassword.type = "password";

            registerToggle.textContent = "👁";

        }

    });

}
// Loading Button

function setLoading(buttonId, status, text) {

    const button = document.getElementById(buttonId);

    if (!button) return;

    button.disabled = status;

    button.textContent = text;

}
// Reset Form

function resetRegisterForm() {

    document.getElementById("register-name").value = "";

    document.getElementById("register-badge").value = "";

    document.getElementById("register-password").value = "";

    document.getElementById("register-confirm-password").value = "";

              }
