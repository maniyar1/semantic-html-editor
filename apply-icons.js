document.addEventListener('DOMContentLoaded', () => {
	[...document.querySelectorAll('[data-icon]')].map(elm => {
		elm.style.backgroundImage = `url(${elm.dataset.icon})`;
	});
});
