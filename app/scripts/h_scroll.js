'use strict';

$(document).ready(function() {
    console.log('h_scroll loaded');

    $(window).load(function(){
        if(window.innerWidth >= 768) {
            initScrollX();
        }
    });

    var initScrollX = function() {
        var slideCount = $('.page').length;
        var slideWidth = $('.page').width();
        var slideHeight = $('.page').height();
        var sliderUlWidth = slideCount * slideWidth;
        
        $('#slider').css({ width: slideWidth, height: slideHeight });
        
        $('#slider-wrap').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        
        $('.page:last-child').prependTo('#slider-wrap');

        function moveLeft() {
            $('#slider-wrap').animate({
                left: + slideWidth
            }, 200, function () {
                $('.page:last-child').prependTo('#slider-wrap');
                $('#slider-wrap').css('left', '');
            });
        }

        function moveRight() {
            $('#slider-wrap').animate({
                left: - slideWidth
            }, 200, function () {
                $('.page:first-child').appendTo('#slider-wrap');
                $('#slider-wrap').css('left', '');
            });
        }

        $('a#arrow-prev').on('click', function () {
            moveLeft();
        });

        $('a#arrow-next').on('click', function () {
            moveRight();
        });
    };

    // $(function() {
    //     $('a.pagelink').bind('click',function(event){
    //         var $anchor = $(this);

    //         // var arrowHref = $()
    //         // if you want to use one of the easing effects:
    //         // $('html, body').stop().animate({
    //         //     scrollLeft: $($anchor.attr('href')).offset().left
    //         // }, 500,'easeInOutExpo');

    //         $('html, body').stop().animate({
    //             scrollLeft: $($anchor.attr('href')).offset().left
    //         }, 250);
    //         event.preventDefault();
    //     });
    // });
});