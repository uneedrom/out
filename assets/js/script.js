const popupOverlay = document.getElementById("popup-overlay");
const registerPopup = document.getElementById("register-popup");
const loginPopup = document.getElementById("login-popup");

function showRegisterPopup() {
    registerPopup.style.display = "flex";
    loginPopup.style.display = "none";
    showOverlay();
}

function showLoginPopup() {
    loginPopup.style.display = "flex";
    registerPopup.style.display = "none";
    showOverlay();
}

function showOverlay() {
    popupOverlay.classList.add('show');
}

function hidePopup() {
    registerPopup.style.display = "none";
    loginPopup.style.display = "none";
    popupOverlay.classList.remove('show');
}

popupOverlay.addEventListener("click", hidePopup);
registerPopup.addEventListener("click", (event) => event.stopPropagation());
loginPopup.addEventListener("click", (event) => event.stopPropagation());
