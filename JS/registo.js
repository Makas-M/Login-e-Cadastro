function onChangeEmail(){
	const email = form.email().value;
	form.emailRequiredError().style.display = email ? "none" : "block";

	form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";

	toggleRegisterButtonDisable();
}
//funcao para quando for inserido o password

function onChangePassword(){
	const password = form.password().value;
	form.passwordRequiredError().style.display = password ? "none" : "block";
	form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";

	toggleRegisterButtonDisable()
}
//funcao para quando for inserido a verificacao do password no registo

function onChangeConfirmPassword(){
	const password = form.password().value;
	const confirmPassword = form.confirmPassword().value;
 	
 	toggleRegisterButtonDisable()

}

//funcao para registar
function register(){
	showLoading();
	const email = form.email().value;
	const password = form.password().value;
	firebase.auth().createUserWithEmailAndPassword(
		email, password
		).then(()=>{
			hideLoading();
			window.location.href = "../../pages/home/home.html"
		}
	).catch(error => {
			hideLoading();
			alert(getErrorMessage(error));
		})
} 
function login(){
	window.location.href = "../../index.html"
}

function getErrorMessage(error){
	return error.message;
}
//funcao para o botao de registro de usuario
function toggleRegisterButtonDisable(){
	form.registerButton().disabled = !isFormValid();
}

//funcao para quando um dos campos de registro foi invalido
function isFormValid(){
	const email = form.email().value;
	if (!email || !validateEmail(email)) {
		return false;
	}
	const password = form.password().value;
	if (!password || password.length < 6) { 
		return false
	}
	const confirmPassword = form.confirmPassword().value;
	if (password != confirmPassword) {
		return false
	}
	return true;
}
//constantes usadas
const form = {
	confirmPassword: () => document.getElementById('confirmPassword'),
	confirmPasswordDoesntMatchEror: () => document.getElementById("password-doesnt-match-error"),
	email: () => document.getElementById('email'),
	emailInvalidError: () => document.getElementById('email-invalid-error'),
	emailRequiredError: () => document.getElementById('email-required-error'), 
	password: () => document.getElementById('password'),
	passwordMinLengthError: () => document.getElementById('password-min-length-error'), 
	passwordRequiredError: () => document.getElementById('password-required-error'), 
	registerButton: () => document.getElementById('register-button'),
}
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "pages/home/home.html";
    }
})