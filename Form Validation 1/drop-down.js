export const dropDown = {
	render: () => {
		const header = document.querySelector('#header');
		if (window.screen.width > 768) {
			const navList = document.querySelector('#nav-list');
			const nav = document.createElement('nav');
			nav.appendChild(navList.content.cloneNode(true));
			header.appendChild(nav);
		} else {
			const temp = document.querySelector('#backdrop-template');
			const mobileNav = temp.content.cloneNode(true);
			mobileNav.querySelector('#backdrop').setAttribute('class', 'menu-hide');
			header.appendChild(mobileNav);

			const btnMenu = document.querySelector('#menu-btn');
			const btnClose = document.querySelector('#close-icon');
			const backdrop = document.querySelector('#backdrop');

			// listener
			btnMenu.addEventListener('click', () => {
				backdrop.setAttribute('class', 'backdrop menu-show');
			});

			btnClose.addEventListener('click', () => {
				backdrop.setAttribute('class', 'backdrop menu-hide');
			});
		}
	}
};
