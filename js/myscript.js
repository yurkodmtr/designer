"use strict";

var navClass = function(){
	var pageCount = $('.slides > section > section').length;
	var clearClass = function(){
		for (var i=1; i<=pageCount; i++) {
			$('.nav').removeClass('page_'+i);
		}
	}

	var setNavClass = function(){
		for (var i=1; i<=pageCount; i++) {
			if ( $('html').hasClass(i) ) {
				clearClass();
				$('.nav').addClass('page_'+i);
			}
		}
	}
	setNavClass();	
}

$(window).load(function(){
	navClass();

	Reveal.addEventListener( 'slidechanged', function( event ) {
	    navClass();
	});
});