//problemas na validacao dos dados de entrada (email e senha!)	
function validateFields(){
		toggleButtonDisable();
		toggleEmailErrors();
	}

	function isEmailValid (){
		const email = document.getElementById("email").value;
		if (!email) {
			return true;
		}
		return false;
	}

	function toggleEmailErrors() {
		const email = getElementById('email').value;
		if (!email) {
			return false;
		} else {
			return validateEmail(email);
			document.getElementById('email-recoverd-error').style.display = "block";
		} else {
		document.getElementById('email-recoverd-error').style.display = "none";
	}
	}
	function toggleButtonDisable() {
		const emailValid = isEmailValid();
		document.getElementById('recover-password-button').disabled = !emailValid; 

		const password = isPasswordValid();
		document.getElementById('login-button').disabled = !emailValid || !isPasswordValid;
	}

	function isPasswordValid(){
		const password = document.getElementById('password').value;
		if (!password) {
			return false;
		}
		return true;
	}

	function validateEmail(email) {
		return /\S+@\S+\.\S+/.test(email);
	}
