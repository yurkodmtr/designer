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
	var removeBodyClass = function(){
		for ( var i=1;i<=7;i++ ) {
			$('body').removeClass('size_'+i);
		}
	}
	if ( w > 1920) { 
		hideNav();
	} else if ( w <= 1920 && w > 1680 ) {
		removeBodyClass();
		$('body').addClass('size_1');
		hideNav();
	} else if ( w <= 1680 && w > 1450 ) {
		removeBodyClass();
		hideNav();
		$('body').addClass('size_2');
	} else if ( w <= 1450 && w > 1200 ) {
		removeBodyClass();
		hideNav();
		$('body').addClass('size_3');
	} else if ( w <= 1200 && w > 960 ) {
		removeBodyClass();
		hideNav();
		$('body').addClass('size_4');
	} else if ( w <= 960 && w > 768 ) {
		removeBodyClass();
		$('body').addClass('size_5');
	} else if ( w <= 768 && w > 320 ) {
		removeBodyClass();
		$('body').addClass('size_6');
	} else if ( w <= 320 ) {
		removeBodyClass();
		$('body').addClass('size_7');
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

var pageScroll = function(){
	if ( $('.slides > section > section.present').hasClass('home__projects') ) {
		Reveal.configure({ 
      	  	width: "100%",
		    height: "100%",
		    margin: 0,
		    minScale: 1,
		    maxScale: 1		 
	  	});
	  	return false;
	}
	var windowHeight = $(window).height();
	var contentHeight = $('.slides > section > section.present .wrap').height();

	if (contentHeight > windowHeight) {

		Reveal.configure({ 
	      	width: 960,
		    height: 700,
		    margin: 0.1,
		    minScale: 0.2,
		    maxScale: 1.5		 
	  	});
	} else {
		Reveal.configure({ 
      	  	width: "100%",
		    height: "100%",
		    margin: 0,
		    minScale: 1,
		    maxScale: 1		 
	  	});
	}
}

var projectLoader = function(){
	if ( $('#home__projects').hasClass("present") ) {
		$('.project_loader').show();
		setTimeout(function(){
			$('.project_loader').fadeOut();
		}, 1800);
	}
}

var projectPagenator = function(){
	var count = $('.owl-pagination div').length;

	for (var i=1;i<=count;i++) {
		$('.project_paginator').append('<div></div>');
	}
	$('.project_paginator div:nth-child(1)').addClass('active');

	$(document).on('click', '.project_paginator div' , function() {		
		$(this).addClass('active').siblings().removeClass('active');
		var i = $(this).index();
		var owl = $(".owl-carousel").data('owlCarousel');
		owl.goTo(i);
	});

}

var projectPagenatorView = function(){
	if ( $('#home__projects').hasClass("present") ) {
		$('.project_paginator').addClass('act');
	} else {
		$('.project_paginator').removeClass('act');
	}
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
	projectPagenator();
	projectPagenatorView();

	//pageScroll();

	Reveal.addEventListener( 'slidechanged', function( event ) {
		slideChange();
		sliderParallaxOnload();
		projectPagenatorView();
		//pageScroll();
	});
	
});

$(window).resize(function(){
	breakpoint();
	projectLoader();
	//pageScroll();
});