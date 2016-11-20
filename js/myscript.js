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


$(window).load(function(){
	slideChange();
	navFix();

	Reveal.addEventListener( 'slidechanged', function( event ) {
		slideChange();
	});
	
});