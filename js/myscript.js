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

	if ( w > 1680) {
		$('body').addClass('pc_large').removeClass('pc tablet phone');
		hideNav();
	} else if ( w <=1680 && w >1200) {
		$('body').addClass('pc').removeClass('pc_large tablet phone');
		hideNav();
	} else if ( w <=1200 && w >=768) {
		$('body').addClass('tablet').removeClass('pc pc_large phone');
	} else if ( w <=768) {
		$('body').addClass('phone').removeClass('pc tablet pc_large');
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

/* burger */
var burger = function(){
	$('.burger').click(function(){

		if ( $(this).hasClass('act') ) {
			$(this).removeClass('act');
		} else {
			$(this).addClass('act');
		}

		if ( $('.nav_device').hasClass('act') ) {
			$('.nav_device').removeClass('act');
		} else {
			$('.nav_device').addClass('act');
		}

		if ( $('.header .logo').hasClass('act') ) {
			$('.header .logo').removeClass('act');
		} else {
			$('.header .logo').addClass('act');
		}

	});
}

var hideNav = function(){
	$('.burger').removeClass('act');
	$('.nav_device').removeClass('act');
	$('.header .logo').removeClass('act');
}

$(document).ready(function(){
	$('.owl-item').removeClass('active');
});

$(window).load(function(){
	$('.nav_device a').click(function(){
		hideNav();
	});
	burger();
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