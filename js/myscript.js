"use strict";

/* add class to nav */
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

/* set anchors */
var navAnchors = function(){
	$('.nav a:nth-child(1)').click(function(){
		Reveal.slide( 1 );
	});
	$('.nav a:nth-child(2)').click(function(){
		Reveal.slide( 1 );
	});
	$('.nav a:nth-child(3)').click(function(){
		Reveal.slide( 1 );
	});
}

$(window).load(function(){
	navClass();

	Reveal.addEventListener( 'slidechanged', function( event ) {
	    navClass();
	});
});