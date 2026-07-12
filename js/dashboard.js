/* ELEMENT */

const userName = document.getElementById("nama-user");

const userRank = document.getElementById("pangkat-user");

const userBadge = document.getElementById("badge-user");

const userStatus = document.getElementById("status-user");

const announcementCard = document.getElementById("announcement-card");

const announcementText = document.getElementById("announcement-text");

const logoutButton = document.getElementById("logout-button");

const adminPanel = document.getElementById("admin-panel");
/* USER */

const currentUser = JSON.parse(

    localStorage.getItem("currentUser")

);
/* LOAD USER */

if (currentUser) {

    userName.textContent = currentUser.nama;

    userRank.textContent = currentUser.pangkat;

    userBadge.textContent = currentUser.badge;

    userStatus.textContent = currentUser.status;

} else {

    window.location.href = "../index.html";

}
/* PENGUMUMAN */

const announcement = localStorage.getItem("announcement");

if (announcement) {

    announcementText.textContent = announcement;

} else {

    announcementCard.style.display = "none";

}
/* PANEL ADMIN */

if (currentUser.is_admin === true) {

    adminPanel.classList.remove("hidden");

}
/* LOGOUT */

logoutButton.addEventListener("click", function () {

    localStorage.removeItem("currentUser");

    window.location.href = "../index.html";

});

