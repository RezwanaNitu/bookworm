/*
Written by : Rezwana Nitu
Email: rezwananitu88@gmail.com
*/

$(document).ready(function() {
	$('#bookworm-logo').hover(function() {
				$(this).fadeOut(300);
				$('#bookworm-logo-alt').fadeIn(300);
			});

			$('#bookworm-logo-alt').hover(function() {
				$(this).fadeOut(300);
				$('#bookworm-logo').fadeIn(300);
			});

	//Parallax js
	$('.parallax-window').parallax();


	//Owl Carousel
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: ["<i class='fa fa-3x fa-angle-left'></i>","<i class='fa fa-3x fa-angle-right'></i>"],
		reaponsiveClass: true,
		reaponsive:{
			0:{ items:1 },
			600:{ items:1 },
        	1000:{ items:3 }
		}
	});

	//Overlay 
	$(".overlay-item").hover(function () {
	    $(this).find('.img-overlay').toggleClass("open");
	});

	//- BackToTop
	var _btn_back_to_top	=	$('#_btn_back_to_top');

	_btn_back_to_top.click(function(event) {
		event.preventDefault();

		$('html, body').animate({scrollTop: 0}, 500);
	});

	$(window).scroll(function(event) {
		var $this 				=	$(this),
			window_height 		=	$this.height() - 150,
			window_scroll_top	=	$this.scrollTop();

		if(window_scroll_top > window_height){
			if(!_btn_back_to_top.is(':visible')){
				_btn_back_to_top.fadeIn(500);
			}
		}else{
			_btn_back_to_top.fadeOut(500);
		}
	});

});