export const inputForm = {
	render: () => {
		const email = document.querySelector('#email');
		const password = document.querySelector('#password');
		const submitForm = document.querySelector('.login-form');
		const errorEmail = document.querySelector('#err-email');
		const errorPwd = document.querySelector('#err-pwd');

		let valid = true;

		email.addEventListener('blur', e => {
			console.log(e.target.value);
			if (
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) &&
				errorEmail
			) {
				valid = true;
				errorEmail.setAttribute('style', '');
			} else {
				valid = false;
				errorEmail.setAttribute('style', 'display: block');
			}
		});

		password.addEventListener('blur', e => {
			if (e.target.value.length > 8 && errorPwd) {
				valid = true;
				errorPwd.setAttribute('style', '');
			} else {
				valid = false;
				errorPwd.setAttribute('style', 'display: block');
			}
		});

		submitForm.addEventListener('submit', e => {
			e.preventDefault();

			if (email.value && password.value && valid) {
				console.log({
					email: email.value,
					password: password.value
				});
			}
		});
	}
};
