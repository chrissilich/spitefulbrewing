'use strict';

window.onload = function() {
	console.log('scroll.js loaded');

	var links = document.querySelectorAll('#desktop-nav-links li');
	// var prevButton = document.getElementById('arrow-prev');
	// var nextButton = document.getElementById('arrow-next');
	var wrapper = document.querySelector('#slider-wrap');
	var slideWidth = document.querySelector('.page').offsetWidth;
	
	var activeLink = 0;
	 
	function setClickedItem(e) {
	    removeActiveLinks();
	 
	    var clickedLink = e.target;
	    activeLink = clickedLink.itemID;
	 
	    changePosition(clickedLink);
	}
	 
	function removeActiveLinks() {
		console.log('links removed');
	    for (var i = 0; i < links.length; i++) {
	        links[i].classList.remove('active');
	    }
	}
	 
	function changePosition(link) {
	    link.classList.add('active');
	    var pageLeftPosition = link.getAttribute('data-pos');
	    // console.log(position);
	    wrapper.style.left = pageLeftPosition;
	}
	
	for (var i = 0; i < links.length; i++) {
	    var link = links[i];
	    
	    link.addEventListener('click', setClickedItem, false);
	 
	    link.itemID = i;

		var leftOffset = link.itemID * slideWidth;
	    var pageLeftPosition = link.setAttribute('data-pos', '-'+leftOffset+'px');
	}

	links[activeLink].classList.add('active');

};