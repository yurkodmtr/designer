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

var sliderParallaxOnload = function(){
	if ( $('#home__projects').hasClass("present") ) {
		var owl = $("#owl-demo").data('owlCarousel');

		owl.reinit({ 
	      	addClassActive : true		 
	  	});
	}
}

$(document).ready(function(){
	$('.owl-item').removeClass('active');
});

$(window).load(function(){
	slideChange();
	navFix();
	sliderParallaxOnload();

	Reveal.addEventListener( 'slidechanged', function( event ) {
		slideChange();
		sliderParallaxOnload();
	});
	
});