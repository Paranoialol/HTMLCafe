
$(document).ready(function () {
	$('.agents__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: false,
		autoplaySpeed: 6000,
		waitForAnimate: false,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
					centerMode: true,
					variableWidth: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})

});
function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger__menu-button');
	let links = menu.find('.menu-link');
	let cover = menu.find('.menu__overlay');
	button.on('click', (e) => {
		e.preventDefault();
		toggleBtn();
	})
	links.on('click', () => toggleBtn());
	cover.on('click', () => toggleBtn());


	function toggleBtn() {
		menu.toggleClass('burger__menu-active');
		if (menu.hasClass('burger__menu-active')) {
			$('body').css('overflow-y', 'hidden');

		} else {
			$('body').css('overflow-y', 'visible');
		}

	};
}
burgerMenu('.burger__menu');