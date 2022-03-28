// ====== all LogIn inputs and btn variables
let logInEmailInput = document.querySelector(`#logInEmailInput`),
    logInPasswordInput = document.querySelector(`#logInPasswordInput`),
    loginBtn = document.querySelector(`#loginBtn`),
    logInMassages = document.querySelector('#logInMassages'),
    userDataContainer;


if (localStorage.getItem('usersData') == null) {
    userDataContainer = []
} else {
    userDataContainer = JSON.parse(localStorage.getItem('usersData'))
}
// ============= check if the value is empty or not ===============
function ifValueEmpty() {
    if (logInEmailInput.value == "" || logInPasswordInput.value == "") {
        return false
    }
    else {
        return true
    }
}
// ================ check if the value exists  ================
function loggedUser() {
    for (let i = 0; i < userDataContainer.length; i++) {
        if (logInEmailInput.value == userDataContainer[i].email && logInPasswordInput.value == userDataContainer[i].password) {
            let userName = userDataContainer[i].name
            localStorage.setItem(`name`, JSON.stringify(userName))
            return true
        }
    }
}
function messageRequired() {
    logInMassages.innerHTML = `<span class="mb-2 d-block text-danger">All inputs is required</span>`
}
function messageIncorrect() {
    logInMassages.innerHTML = `<span class="mb-2 text-danger">incorrect email or password</span>`;
}
// =========== Main Function =============
function goToHomePage() {
    if (ifValueEmpty() != true) {
        messageRequired()
        return false
    }
    if (loggedUser() != true) {
        messageIncorrect()
        return false
    }
    window.location.href = `homepage.html`
}
loginBtn.addEventListener("click", goToHomePage)