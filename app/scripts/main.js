'use strict';

$(document).ready(function() {
	console.log('main.js loaded');

	var mobileDropdown = function() {
		// console.log('something with nav');
		var navButton = $('#menu-button');

		navButton.on('click', function() {
			var moveNav = $(this).data('moveNav');

			$('#mobile-nav-links').animate({
				top: moveNav ? -300 : 75
			}, 200);

			$(this).data('moveNav', !moveNav);
		});

	};
	
	mobileDropdown();

	var initAnimations = function() {
		$('#home-text').on('mouseenter', function() {
			$('h1').addClass('animated flash');
			$('h4').addClass('animated flash');
		});

		$('#home-text').on('mouseleave', function() {
			$('h1').removeClass('animated flash');
			$('h4').removeClass('animated flash');
		});

		$('#home-minnie').on('mouseenter', function() {
			$('#home-minnie').addClass('animated tada');
		});
	
		$('#home-minnie').on('mouseleave', function() {
			$('#home-minnie').removeClass('animated tada');
		});

		// $('#sb-logo').on('mouseenter', function() {
		// 	$('#sb-logo').css('width', '800');
		// 	$('#sb-logo').addClass('animated pulse');
		// });
		// $('#sb-logo').on('mouseleave', function() {
		// 	$('#sb-logo').css('width', '55%');
		// 	$('#sb-logo').removeClass('animated pulse');
		// });
	};

	if(window.innerWidth > 768){
		initAnimations();
	}



	// $('.page').hide().first().show();

	// $('.nav-item a.pagelink').on('click', function(e) {
	// 	e.preventDefault();
	// 	var newPageID = $(this).attr('href').replace('#','');
	// 	changePage(newPageID);
	// });

	// function changePage(pageID) {
	// 	$('.page:visible').fadeOut();
	// 	$('.page#'+pageID).delay(400).fadeIn();
	// }

	// $('.page').hide().first().show();

	// $('.nav-item a.pagelink').on('click', function(e) {
	// 	e.preventDefault();
	// 	var newPageID = $(this).attr('href').replace('#','');
	// 	changePage(newPageID);
	// });

	// function changePage(pageID) {
	// 	$('.page:visible').animate({
	// 		left: '-100vw'
	// 	}, 500);

	// 	$('.page#'+pageID).animate({
	// 		left: '-100vw'
	// 	}, 500);
	// }

});