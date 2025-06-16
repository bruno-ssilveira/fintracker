export default function navbarEvents() {
	const navBar = document.querySelector('.navBar');
	const arrowRight = document.querySelector('.navArrowRight');
	const arrowLeft = document.querySelector('.navArrowLeft')
	const icon = document.querySelectorAll('.icon');
	const icon2 = document.querySelectorAll('.icon2');
	const iconText = document.querySelectorAll('.iconText');
	const title = document.querySelector('.title');

	arrowRight.addEventListener('click', () => {
		navBar.style.width = '13em';
		arrowRight.style.display = 'none';
		arrowLeft.style.display = 'block';
		title.style.display = 'block';

		for(let icons of icon) {
			icons.style.display = 'none';
		}
		for(let iconsText of iconText) {
			iconsText.style.display = 'flex';
		}
	});

	arrowLeft.addEventListener('click', () => {
		navBar.style.width = '4em';
		arrowRight.style.display = 'block';
		arrowLeft.style.display = 'none';
		title.style.display = 'none';

		for(let icons of icon) {
			icons.style.display = 'block';
		}
		for(let iconsText of iconText) {
			iconsText.style.display = 'none';
		}
	});
}