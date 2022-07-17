jQuery(document).ready(function(){
	//modal
	$('.popup .close').click(function(){
		$('.popup').hide();
	});
	
	// mobile menu
	$('.m_btn.menu').click(function(){
		$('.gnb_wrap_m').addClass('active');
		$('.m_btn.menu').fadeOut();
		$('.m_btn.user').fadeOut();
		$('.m_btn.close').fadeIn();
		scrollDisable();
	})
	$('.m_btn.close').click(function(){
		$('.gnb_wrap_m').removeClass('active');
		$('.m_btn.menu').fadeIn();
		$('.m_btn.user').fadeIn();
		$('.m_btn.close').fadeOut();
		scrollAble();
	})

	// mobile menu scroll
	function scrollDisable(){
		$('.gnb_wrap_m').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
			e.preventDefault();
			e.stopPropagation();
			return false;
		});
	}
	function scrollAble(){
		$('.gnb_wrap_m').removeClass('scrollDisable').off('scroll touchmove mousewheel');
	}
	
	//main_banner
	var main_banner = new Swiper('.swiper-container.main_banner', {
	  slidesPerView:1,					
	  autoplay: {						
		delay: 3000,					
		disableOnInteraction: false,
		loop: true,
	  },
	  pagination: {						
		el: '.control',		
		clickable: true,				
	  },
	  navigation: {						
		nextEl: '.arrow>.right',	
		prevEl: '.arrow>.left',	
	  }
	});
	
	//main_banner start, stop
	$('.arrow>.start').hide();
	$('.arrow>.pause').click(function(){
		main_banner.autoplay.stop();
		$('.arrow>.start').show();
		$('.arrow>.pause').hide();
	})
	$('.arrow>.start').click(function(){
		main_banner.autoplay.start();
		$('.arrow>.pause').show();
		$('.arrow>.start').hide();
	})
	
	//benefit 
		var benefit_list = new Swiper('.swiper-container.benefit_list', {
	  slidesPerView:1,					
	  autoplay: {						
		delay: 1000,
		duration: 1000,
		disableOnInteraction: false,
		loop: true,
	  },
	});
	
	$('.marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 15000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
	});
	
	$('#benefit .pause').click(function(){
	  $('.marquee').marquee('toggle');
	  $('#benefit .pause').hide();
	  return false;
	});
	$('#benefit .start').click(function(){
	  $('.marquee').marquee('toggle');
	  $('#benefit .pause').show();
	  return false;
	});
})