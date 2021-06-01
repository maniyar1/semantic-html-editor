document.addEventListener('DOMContentLoaded', () => {
	[...document.querySelectorAll('[data-icon]')].map(elm => {
		elm.style.backgroundImage = `url(${elm.dataset.icon})`;
<<<<<<< HEAD
	});
=======
	}).map(console.log);
>>>>>>> a506976 (Use flexbox again, stop using apply-icons.js but still use css aspect ratio hackiness)
});
