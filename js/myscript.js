"use strict";

var slideChange = function(){
	if ( $('#home__about').hasClass("present") ) {
		$('.home__about__img').fadeIn();
	} else {
		$('.home__about__img').fadeOut();
	}

}

var navFix = function(){
	$('.header a').click(function(){
		var currentPage = $(this).attr('href');		
		var hash = '#' + window.location.hash.substr(2);		
		if (currentPage == hash) {
			return false;
		}
	});
}

var sliderParallax = function(){

	$('.owl-next').click(function(){

		var currentIndex = $('.owl-item.active').index();
		var totalItems = $('.owl-item').length - 1;

		$('.reveal .home__projects .owl-item:eq('+currentIndex+') .slide .table-cell:first-child img').addClass('act');

		var prevSlide = currentIndex - 1;
		if (prevSlide < 0) {
			prevSlide = 2;
		}

		var prevSlideElem = $('.reveal .home__projects .owl-item:eq('+prevSlide+') .slide .table-cell:first-child img');
		prevSlideElem.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
            prevSlideElem.removeClass( "act" );
        });

	});

	$('.owl-prev').click(function(){

		var currentIndex = $('.owl-item.active').index();
		var totalItems = $('.owl-item').length - 1;

		$('.reveal .home__projects .owl-item:eq('+currentIndex+') .slide .table-cell:first-child img').addClass('act');

		var prevSlide = currentIndex + 1;
		if (prevSlide > 2) {
			prevSlide = 0;
		}

		var prevSlideElem = $('.reveal .home__projects .owl-item:eq('+prevSlide+') .slide .table-cell:first-child img');
		prevSlideElem.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
            prevSlideElem.removeClass( "act" );
        });

	});
}

var sliderParallaxOnScroll = function(){
	if ( $('#home__projects').hasClass("present") ) {
		var currentIndex = $('.owl-item.active').index();
		console.log(currentIndex);
	}
}


$(window).load(function(){
	slideChange();
	navFix();
	sliderParallax();

	Reveal.addEventListener( 'slidechanged', function( event ) {
		slideChange();
		sliderParallaxOnScroll();
	});
	
});