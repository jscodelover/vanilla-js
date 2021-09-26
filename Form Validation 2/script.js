// set error message for fields
function setError(field, message) {
	const parentNode = field.parentElement;
	const small = parentNode.querySelector('small');
	small.innerHTML = message;
	if (message) {
		if (!parentNode.className.includes('error')) {
			small.className = 'visible';
			parentNode.className = `${parentNode.className} error`;
		}
	} else {
		small.className = 'not-visible';
		parentNode.className = 'input-wrapper';
	}
}

// check a particular field if value or not
function checkField(field) {
	if (!field.value.trim()) {
		const fieldName = field.name;
		setError(field, `${fieldName} is required`);
	} else {
		setError(field, '');
	}
}

// run a check on all field for value
function checkEmptyFields(fields) {
	fields.forEach(field => {
		checkField(field);
	});
}

// validation check for email
function isEmailValid(email) {
	if (email.value) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
			setError(email, '');
		} else {
			setError(email, 'Invalid Email');
		}
	}
}

// username length check
function checkUsernameLength(username) {
	if (username.value) {
		if (username.value.trim().length < 3) {
			setError(username, 'Username has be at least 3 characters long');
		} else if (username.value.trim().length > 15) {
			setError(username, 'Username has be at most 15 characters long');
		} else {
			setError(username, '');
		}
	}
}

// same password check
function isPasswordSame(password, confirmPassword) {
	if (password.value && confirmPassword.value) {
		if (password.value === confirmPassword.value) {
			setError(confirmPassword, '');
		} else {
			setError(confirmPassword, 'Password does not match');
		}
	}
}

// password length check
function passwordLength(password, checkSame = true) {
	if (password.value) {
		if (password.value.trim().length < 8) {
			setError(password, 'Password has be at least 8 characters long');
		}
		if (checkSame) {
			setError(password, '');
			isPasswordSame();
		}
	}
}

// clear form data on back
function clearForm(field) {
	field.value = '';
	const parentNode = field.parentElement;
	parentNode.className = parentNode.className.replace('error', '');
	const small = parentNode.querySelector('small');
	small.innerHTML = '';
}

/**
 *
 * Register Form
 *
 */

function register() {
	// signup form
	const registerBtn = document.querySelector('#registerForm');
	const username = document.querySelector('#username');
	const email = document.querySelector('#email');
	const password = document.querySelector('#password');
	const confirmPassword = document.querySelector('#confirm-password');

	// button
	const signup = document.querySelector('#signup');
	const backSignup = document.querySelector('#backSignup');

	// device
	const signupScreen = document.querySelector('#signup-screen');

	const allSignupField = [username, email, password, confirmPassword];

	registerBtn.addEventListener('submit', e => {
		e.preventDefault();

		// check all field whether they are empty or not
		checkEmptyFields(allSignupField);

		// user name check for length
		checkUsernameLength(username);

		// validation check for email
		isEmailValid(email);

		// password match check
		isPasswordSame(password, confirmPassword);

		// password length check
		passwordLength(password);

		// check if form should be submit or not
		const isError = registerBtn.querySelector('.error');
		if (!isError) {
			alert('Form submitted successful!!');
		}
	});

	username.addEventListener('blur', () => {
		checkField(username);
		checkUsernameLength(username);
	});

	email.addEventListener('blur', () => {
		checkField(email);
		isEmailValid(email);
	});

	password.addEventListener('blur', () => {
		checkField(password);
		passwordLength(password);
	});

	confirmPassword.addEventListener('blur', () => {
		checkField(confirmPassword);
		isPasswordSame(confirmPassword);
	});

	signup.addEventListener('click', () => {
		signupScreen.className = signupScreen.className.replace(
			'animate__backer',
			'animate__fronter'
		);
	});

	backSignup.addEventListener('click', () => {
		signupScreen.className = signupScreen.className.replace(
			'animate__fronter',
			'animate__backer'
		);

		allSignupField.forEach(field => {
			clearForm(field);
		});
	});
}

/**
 *
 *
 * Login From
 *
 */

function login() {
	// buttons
	const login = document.querySelector('#login');
	const backLogin = document.querySelector('#backLogin');

	// device
	const loginScreen = document.querySelector('#login-screen');

	// login form
	const loginBtn = document.querySelector('#loginForm');
	const email = document.querySelector('#emailLogin');
	const password = document.querySelector('#passwordLogin');

	const allLoginField = [email, password];

	loginBtn.addEventListener('submit', e => {
		e.preventDefault();

		// check all field whether they are empty or not
		checkEmptyFields(allLoginField);

		// validation check for email
		isEmailValid(email);

		// password length check
		passwordLength(password, false);

		// check if form should be submit or not
		const isError = loginBtn.querySelector('.error');
		if (!isError) {
			alert('Login successful!!');
		}
	});

	email.addEventListener('blur', () => {
		checkField(email);
		isEmailValid(email);
	});

	password.addEventListener('blur', () => {
		checkField(password);
		passwordLength(password, false);
	});

	login.addEventListener('click', () => {
		loginScreen.className = loginScreen.className.replace(
			'animate__backer',
			'animate__fronter'
		);
	});

	backLogin.addEventListener('click', () => {
		loginScreen.className = loginScreen.className.replace(
			'animate__fronter',
			'animate__backer'
		);

		allLoginField.forEach(field => {
			clearForm(field);
		});
	});
}

/**
 *
 * Main Content load
 */
document.addEventListener('DOMContentLoaded', () => {
	login();
	register();
});
