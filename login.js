let loginButton = document.getElementById("login-button");

loginButton.onclick = function (event) {
    let login = document.getElementById("login").value;
    let cookieLive = 3600; 
 
    if (login) {
        document.cookie = "login=" + encodeURIComponent(login) + ";max-age=" + cookieLive;
        location.href = "index.html";
    }
    return false;
}

function getCookie() {
    let cookieArray1 = document.cookie.split(";");
    let cookieObject = {};
    for (const cookie of cookieArray1) {
        let element = cookie.trim();
        element = element.split("=");
        let key = element[0];
        let value = element[1];
        cookieObject[key] = value;
    }
    return cookieObject;
}

let allCookies = getCookie();

let loginRegContainer = document.getElementById("login-reg-container");
if (allCookies["login"]) {
    let login = decodeURIComponent(allCookies["login"]);
    loginRegContainer.innerHTML = `
        <a href="#" class="login-name">${login}</a>
        <a href="#" class="button" id="logout">Выйти</a>`;
} else {
    loginRegContainer.innerHTML = `
        <a href="#modal-window" class="button" id="show-modal-window">  Вход</a>
        <a href="#" class="button">Регистрация</a>`;
    let showModalButton = document.getElementById("show-modal-window");
    showModalButton.onclick = function (event) {
        let modalWindow = document.getElementById("modal-window");
        modalWindow.classList.add("show-modal-window");
        return false;
    }
    let hideModalButton = document.getElementById("hide-modal-window");
    hideModalButton.onclick = function (event) {
        let modalWindow = document.getElementById("modal-window");
        modalWindow.classList.remove("show-modal-window");
        return false;
    }
}

let logoutButton = document.getElementById("logout");
if (logoutButton) {
    logoutButton.onclick = function (event) {
        event.preventDefault();
        document.cookie = "login=";
        location.reload();
    }
}
