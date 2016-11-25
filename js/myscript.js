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

var breakpoint = function(){
	var w = $(window).width();
	if ( w <=768 && w>=321) {
		$('body').addClass('device');
		Reveal.configure({ 
			width: '620',
			height: '1024'
		});
	} else if ( w <=320) {
		$('body').addClass('device');
		Reveal.configure({ 
			width: '290',
			height: '1024'
		});
	} else {
		$('body').removeClass('device');
		Reveal.configure({ 
			width: '1920',
			height:'1080'
		});
	}
}

var contactText = function(){
	$('.home__contact input, .home__contact .textarea').focus(function(){
		$(this).parent().addClass('act');
	});	
	$('.home__contact input, .home__contact .textarea').focusout(function(){
		if ( $(this).val().length == 0 ) {
			$(this).parent().removeClass('act');
		}
		
	});	
}

$(document).ready(function(){
	$('.owl-item').removeClass('active');
});

$(window).load(function(){
	slideChange();
	navFix();
	sliderParallaxOnload();
	breakpoint();
	contactText();

	Reveal.addEventListener( 'slidechanged', function( event ) {
		slideChange();
		sliderParallaxOnload();
	});
	
});

$(window).resize(function(){
	breakpoint();
});