
//o que acontece quando o email e' preenchido;
function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}
//o que acontece queando o campo de senha e' preenchido
function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}
//o que acontece quando o usuario clica no botao de login;
function login() {
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value).then(response =>{
            hideLoading();
            window.location.href = "pages/home/home.html";
        }).catch(error => {
            hideLoading();
            alert(error.code);
        });    
}
//tratamento da mensagem de erro (quando o usuario nao esta cadastrado).
function getErrorMessage(error){
    if(error.code == "auth/user-not-found"){
        return "usuario nao econtrado";
    }
    if(error.code == "auth/wrong-password"){
        return "senha errada";
    }
        return error.message;
}
//funcao de acesso a pagina de registro
function register() {

    window.location.href = "pages/register/registo.html";
}
//funcao de recuperar senha
function recoverPassoword(){
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() =>{
        hideLoading();
        alert('email enviado com sucesso');
    }).catch(error =>{
        hideLoading();
        alert(getErrorMessage(error));
    });

}
//erros inerentes ao email
function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    return form.password().value ? true : false;
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
} 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "pages/home/home.html";
    }
})