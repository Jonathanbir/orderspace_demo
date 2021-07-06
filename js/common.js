//=====================漢堡menu=========================
	$(document).ready(function () {
		$('.hamburger').click(function(){
			$('.nav-mobile').toggleClass('active');
			$('.hamburger').toggleClass('active');
			$('.hamburger .middle').toggleClass('active');
			$('.hamburger .top').toggleClass('active');
			$('.hamburger .bottom').toggleClass('active');
		});
//==================回到top==========================
		var scrollTop = $(".navgation_inner");
		// var scrollTop = $(".new-arrivals");
		$(scrollTop).click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		$(scrollTop).click(function() {
			$('html, body').animate();
			return false;
		});
		
		var scrollTop = $(".arrow_to_top");

		$(window).scroll(function() {
			var topPos = $(this).scrollTop();
			if (topPos < 100) {
				$(scrollTop).css("opacity", "0");

			} else {
				$(scrollTop).css("opacity", "0");
			}

		}); // scroll END

		$(scrollTop).click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		$(window).scroll(function() {
			var topPos = $(this).scrollTop();
			if (topPos >200) {
				$(scrollTop).css("opacity", "1");
	
			} else {
				$(scrollTop).css("opacity", "0");
			}
	
		}); 
	});


//==================回到top==========================

//==================下滑頁面==========================
	$(document).ready(function() {
		$(function() {
			$('.pagedown').click(function(){
				$('html,body').animate({ scrollTop: $('#next_page').offset().top }, 800);
			})
		})
		$(function() {
			$('.contactdown').click(function(){
				$('html,body').animate({ scrollTop: $('#contact_us').offset().top }, 800);
			})
		})
	});
//==================下滑頁面==========================


