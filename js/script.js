
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
// $(document).ready(function () {

// 	if ($('body').width() < 1100) {

// 		$('.agents__slider').slick({
// 			arrows: false,
// 			dots: true,
// 			slidesToShow: 2,
// 			slidesToScroll: 2,
// 			variableWidth: true,

// 		});
// 	} else if ($('body').width() > 1200) {

// 		$('.agents__slider').slick({
// 			arrows: false,
// 			dots: true,
// 			slidesToShow: 3,
// 			slidesToScroll: 3,
// 			autoplay: true,
// 			autoplaySpeed: 6000,
// 			waitForAnimate: false,
// 			variableWidth: false,
// 		});
// 	}
// });
