$(document).ready(function() {
	$(".section__select-year select").niceSelect();

	$(".header__burger").on("click", function() {
		if ($(this).hasClass("header__burger-active")) {
			$(this).removeClass("header__burger-active");
			$(".nav").removeClass("nav-active");
		}	
		else {	
			$(this).addClass("header__burger-active");
			$(".nav").addClass("nav-active");
		}
	});

	$(".nav").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 1500);

		if ($(".header__burger").hasClass("header__burger-active")) {
			$(".header__burger").removeClass("header__burger-active");
			$(".nav").removeClass("nav-active");
		}
	});
});

var range = document.getElementById('javascript__slider');
var inputNumber = document.getElementById('javascript__input');
var pips = document.querySelectorAll('.steps__item');

function clickOnPip() {
    var value = Number(this.getAttribute('data-value'));
    range.noUiSlider.set(value);
}

for (var i = 0; i < pips.length; i++) {

    // For this example. Do this in CSS!
    pips[i].style.cursor = 'pointer';
    pips[i].addEventListener('click', clickOnPip);
}

noUiSlider.create(range, {
    start: 60,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 100
    }
});

range.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];
    inputNumber.value = value;
});

inputNumber.addEventListener('change', function () {
    range.noUiSlider.set([null, this.value]);
});