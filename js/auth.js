/* ELEMENT */
const loginName = document.getElementById("login-name");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");

const registerName = document.getElementById("register-name");
const registerBadge = document.getElementById("register-badge");
const registerPassword = document.getElementById("register-password");
const registerConfirmPassword = document.getElementById("register-confirm-password");
const registerButton = document.getElementById("register-button");

/* EVENT LISTENER */
if (loginButton) loginButton.addEventListener("click", loginUser);
if (registerButton) registerButton.addEventListener("click", registerUser);

/* LOGIN FUNCTION */
async function loginUser() {
    const namaIc = loginName.value.trim();
    const password = loginPassword.value.trim();

    if (!namaIc || !password) {
        alert("Nama IC dan Password wajib diisi.");
        return;
    }

    try {
        const { data, error } = await supabase
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

        localStorage.setItem("currentUser", JSON.stringify(data));
        window.location.href = "pages/dashboard.html";  // Pastikan path benar

    } catch (err) {
        console.error(err);
        alert("Terjadi kesalahan saat login.");
    }
}

/* REGISTER FUNCTION */
async function registerUser() {
    const namaIc = registerName.value.trim();
    const badge = registerBadge.value.trim();
    const password = registerPassword.value.trim();
    const confirmPassword = registerConfirmPassword.value.trim();

    if (!namaIc || !badge || !password || !confirmPassword) {
        alert("Semua data wajib diisi.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Konfirmasi password tidak sesuai.");
        return;
    }

    try {
        // Cek duplikat
        const { data: checkUser } = await supabase
            .from("roster_personel")
            .select("id")
            .or(`nama_ic.eq.${namaIc},badge.eq.${badge}`);

        if (checkUser && checkUser.length > 0) {
            alert("Nama IC atau Badge sudah digunakan.");
            return;
        }

        // Insert data
        const { error } = await supabase
            .from("roster_personel")
            .insert([{
                nama_ic: namaIc,
                badge: badge,
                password: password,
                pangkat: "-",
                gaji_pokok: 0,
                is_admin: false,
                status_akun: "PENDING"
            }]);

        if (error) {
            console.error(error);
            alert("Registrasi gagal: " + error.message);
            return;
        }

        alert("Registrasi berhasil! Tunggu persetujuan Admin.");
        
        // Reset form dan balik ke login
        registerName.value = "";
        registerBadge.value = "";
        registerPassword.value = "";
        registerConfirmPassword.value = "";
        
        document.getElementById("show-login").click();

    } catch (err) {
        console.error(err);
        alert("Terjadi kesalahan saat registrasi.");
    }
    }
