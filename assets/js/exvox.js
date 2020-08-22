	$(function() { 'use strict';

  // navigation
  $(window).scroll(function () {
    var sticky = $('.menu-style-1, .header-style-1'),
      scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });
 //mobile nav
$(document).ready(function () {
    $(".hamburger-menu").click(function () {
      $(".menu-btn").toggleClass("active");
      $(".main-menu, .menu-style-1").toggleClass("active");
      $("body").toggleClass("menu-open");
      $('html').toggleClass('overflow');
    });
  });
  $(document).ready(function () {
    $('.menu-item-has-children>a').on('click', function () {
      $(this).removeAttr('href');
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul.sub-menu').slideUp();
      } else {
        element.addClass('open');
        element.children('ul.sub-menu').slideDown();
        element.siblings('li').children('ul.sub-menu').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul.sub-menu').slideUp();
      }
    });
  });
	$(window).on('load', function(){

		$('.progress-circle-prog').addClass('fill-mode');
		
	});
	$('.bus-home-slider').slick({
		dots: false,
		arrows:true,
		infinite:true,
	autoplay:true,
	autoplay:500,
		prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint:991,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots:false,
				arrows:false
			}
		}
	
		]
			
	});
	$('.testimonial-slider1').slick({
		dots: true,
		arrows:false,
		infinite:true,
		autoplay: true,
		  autoplaySpeed: 2000,
		  speed: 500,
				slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
		{
		  breakpoint:991,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots:true
		  }
		}
	
		]
		});
	$('.counters').counterUp({
		delay: 10,
		time: 2000
	});
 // back to top
 var offset = 120;
 var duration = 500;
 $(window).on('scroll', function () {
   if ($(this).scrollTop() > offset) {
	 $('.back-top').fadeIn(duration);
   } else {
	 $('.back-top').fadeOut(duration);
   }
 });
 $('.back-top').on('click', function (event) {
   event.preventDefault();
   $('html, body').animate({
	 scrollTop: 0
   }, "slow");
   return false;
 });
 if ($(window).scrollTop() > offset) {
   $('.back-top').fadeOut(0);
 }
 $('a[href="#"]').click(function (e) {
   e.preventDefault ? e.preventDefault() : e.returnValue = false;
 });

	

});