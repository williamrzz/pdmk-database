/* ELEMENT */

const loginName = document.getElementById("login-name");

const loginPassword = document.getElementById("login-password");

const loginButton = document.getElementById("login-button");

const registerName = document.getElementById("register-name");

const registerBadge = document.getElementById("register-badge");

const registerPassword = document.getElementById("register-password");

const registerConfirmPassword = document.getElementById("register-confirm-password");

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

    const namaIc = loginName.value.trim();

    const password = loginPassword.value.trim();

    if (!namaIc || !password) {

        alert("Nama IC dan Password wajib diisi.");

        return;

    }

}
/* LOGIN */

async function loginUser() {

    const namaIc = loginName.value.trim();

    const password = loginPassword.value.trim();

    if (!namaIc || !password) {

        alert("Nama IC dan Password wajib diisi.");

        return;

    }

    const {

        data,

        error

    } = await supabase

        .from("roster_personel")

        .select("*")

        .eq("nama_ic", namaIc)

        .eq("password", password)

        .single();

    if (error || !data) {

        alert("Nama IC atau Password salah.");

        return;

    }

    if (data.status_akun === "PENDING") {

        alert("Akun Anda masih menunggu persetujuan Admin.");

        return;

    }

    localStorage.setItem(

        "currentUser",

        JSON.stringify(data)

    );

    window.location.href = "pages/dashboard.html";

}
