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
		var el = $('.reveal .home__projects .slide .table-cell:first-child img');
		el.addClass( "act" ).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
            el.removeClass( "act" );
        });
	});
}


$(window).load(function(){
	slideChange();
	navFix();
	sliderParallax();

	Reveal.addEventListener( 'slidechanged', function( event ) {
		slideChange();
	});
	
});