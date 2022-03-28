//  ======== all sign up Variables  ===========
let signUpNameInput = document.querySelector(`#signUpNameInput`),
    singUpEmailInput = document.querySelector(`#singUpEmailInput`),
    singUpPasswordInput = document.querySelector(`#singUpPasswordInput`),
    signupBtn = document.querySelector(`#signupBtn`),
    userDataContainer;                                 // null protoype will change in getInpustValue funtion;
    massage = document.querySelector(`.massage`);


// To check if there is data in the array
if (localStorage.getItem('usersData') == null) {
    userDataContainer = []
} else {
    userDataContainer = JSON.parse(localStorage.getItem('usersData'))
}

// ========= check signUp inputs is empty or not  =====================
function checkSingUpEmptyValue() {
    if (singUpEmailInput.value != "" && singUpPasswordInput.value != "" && signUpNameInput.value != "") {
        return true
    }
}
// ===== put data in localStorage ======
function setItem() {
    localStorage.setItem(`usersData`, JSON.stringify(userDataContainer))
}
// ========== mamin Function =====
signupBtn.addEventListener("click",()=>{
    if (checkSingUpEmptyValue() != true) {
        messageRequired();
        return false
    }
    if (checkEmailExists() == true) {
        messageExists()
        return false
    }
    let inputsValue = {
        name: signUpNameInput.value,
        email: singUpEmailInput.value,
        password: singUpPasswordInput.value
    }
    userDataContainer.push(inputsValue)
    setItem()
    console.log(userDataContainer);
    clear()
    massegSuccess()
    setTimeout(()=>{
        window.location.href = "logIn.html"
    }, 2000)
})
function massegSuccess() {
    massage.innerHTML = `<span class="mb-3 d-block text-success">Success</span>`
}
function messageRequired() {
    massage.innerHTML = `<span class="mb-2 d-block text-danger">All inputs is required</span>`
}
function checkEmailExists() {
    for (let i = 0; i < userDataContainer.length; i++) {
        if (singUpEmailInput.value.toLowerCase() == userDataContainer[i].email.toLowerCase()) {
            return true
        }
    }
}
function messageExists() {
        massage.innerHTML = `<span class="mb-2 d-block text-danger">email already exists</span>`
}
function clear() {
    signUpNameInput.value = ""
    singUpEmailInput.value = ""
    singUpPasswordInput.value = ""
}