jQuery(document).ready(function(){
	
	// fullpage
	$('#fullpage').fullpage({
		menu: '#header',
		overflowScroll:true,
		onLeave: function(index, nextIndex, direction) {
			var header = $('#header');
			if(index == 1 && nextIndex == 2) { 
				$('#sales').addClass('active');
			}
			if (direction == 'down'){
				header.addClass('hide');
			}else{header.removeClass('hide');}
			if (index == 4){
				header.addClass('color')
			}else{header.removeClass('color')}
	}
	});

	// menu drop down
	var header = $('#header'); 
	var dep1 = $('#lnb .lnb');
	dep1.mouseenter(function(){
		header.addClass('hover');
		header.find('.depth2').fadeIn();
	})
	.mouseleave(function(){
		header.removeClass('hover');
		header.find('.depth2').fadeOut();
	})	

	// mobile menu
	$('#gnb .menu').click(function(e){
		$('.m').toggleClass('click');
		$('#header').toggleClass('color');
		$('#header').toggleClass('m');
		$('.bg').toggleClass('click');
		$('.bar').toggleClass('active');
		if($('#section3').hasClass('active')){
			$('#header').addClass('color')
		}
	})

	$('.bg').click(function(){
		$('.m').removeClass('click');
		$('#header').removeClass('color');
		$('#header').removeClass('m');
		$('.bg').removeClass('click');
		$('.bar').removeClass('active');
		scrollAble();
		if($('#section3').hasClass('active')){
			$('#header').addClass('color')
		}
	})

	$('.menu_list').click(function(){
		$('.mdepth2').hide();
		$('.menu_list').removeClass('click');
		$(this).addClass('click').find($('.mdepth2')).slideDown(800);
	})	

	// mobile menu scroll
	function scrollDisable(){
		$('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
			e.preventDefault();
            e.stopPropagation();
            return false;
		});
	}
	function scrollAble(){
		$('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
	}

	// scroll able/disable
	$('#gnb .menu').click(function(){
		if(!$('.bar').hasClass('active')){
			scrollAble();
		}else{scrollDisable();}
	})	

	// main_visual
	var main_visual = new Swiper('.swiper-container.main_visual', {
		speed: 800,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		on: {
			reachEnd: function(){
				var item=$('#main_visual .txt_wrap');
				item.removeClass('active');
				item.last().addClass('active');
			},
			activeIndexChange: function () {
				var item=$('#main_visual .txt_wrap');
				var activeItem=item.eq(this.realIndex+1);
				activeItem.addClass('active');
			},
		}
	});

	//news
	var news = new Swiper('.swiper-container.news', {
		direction: 'vertical',
		speed: 800,
		loop: true,
		autoplay: {
		delay: 3150,
		},
		touchRatio: 0,
	})

	//news Btn
	$('#main_visual .start').hide();
	$('#main_visual .pause').click(function(){
		news.autoplay.stop();
		$('#main_visual .pause').hide();
		$('#main_visual .start').show();
		$('.control .progressBar').addClass('pause');
	})
	$('#main_visual .start').click(function(){
		news.autoplay.start();
		$('#main_visual .start').hide();
		$('#main_visual .pause').show();
		$('.control .progressBar').removeClass('pause');
	})

	//sales
	$('#sales').bxSlider({
		maxSlides: 4,
		minSlides: 1,
		moveSlides: 1,		
		pager:true,
		pagerType:'short',
		infiniteLoop:false,
		hideControlOnEnd:true,
  });

  	// sales hover
	var item=$('#sales .sales_item');
	var bg=$('#section2 .sales_item_bg');
	item.each(function(){
		$(this).mouseenter(function(){
			var itemNum=$(this).index()-4;
			bg.removeClass('hover');
			bg.eq(itemNum).addClass('hover');
		})
		$(this).mouseleave(function(){
			bg.removeClass('hover');
		})
	})
	if($(window).width()<=500){
		item.each(function(){
			$(this).ready(function(){
				var itemNum=$(this).index();
				bg.removeClass('hover');
				bg.eq(itemNum).addClass('hover');
			})
		})
	}

	// footer family button
	$('#footer .family').click(function(){
		$(this).toggleClass('click');
	})
});
