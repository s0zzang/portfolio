jQuery(document).ready(function(){
	
	// header
 	var win=$(window),
		Header=$('#header'), 
		gnb=Header.find('.container1'),
		lnb=Header.find('.container2'),
		seperator=gnb.outerHeight();
	win.scroll(function(){
		if($(this).scrollTop() > seperator){
			if(!lnb.hasClass('shrink')){
			//	gnb.slideUp();
				gnb.addClass('shrink');
				lnb.addClass('shrink');
			}
		}else{
			if(lnb.hasClass('shrink')){
			//	gnb.slideDown();
				gnb.removeClass('shrink')
				lnb.removeClass('shrink')
			}
		}
	}); 
	
	// main_visual
	var main_visual = new Swiper('.swiper-container.visual_list', {
	  slidesPerView:1,					
	  autoplay: {						
		delay: 3500,					
		disableOnInteraction: false,
		loop: true,
	  },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
	  navigation: {						
		nextEl: '.swiper-next',	
		prevEl: '.swiper-prev',	
	  }
	});
	
	//main_visual stop, start
	$('#visual .start').hide();
	$('#visual .pause').click(function(){
		main_visual.autoplay.stop();
		$('#visual .pause').hide();
		$('#visual .start').show();
	});
	$('#visual .start').click(function(){
		main_visual.autoplay.start();
		$('#visual .pause').show();
		$('#visual .start').hide();
	});
	
	// main_board
	 $('.main_board').each(function() {
		$(this).bxSlider({
			maxSlides:3,
			moveSlides:1,		
			pager:true,
			pagerType:'short',
			controls:true,
			touchEnabled : (navigator.maxTouchPoints > 0),
		})
	});	

	// main_board tab
	var main_board_tab=$('#board'),
		board_list=main_board_tab.find('.board_list li.board_item'),
		board_box=main_board_tab.find('.board_box>div');
		board_box.eq(0).show();
	board_list.click(function(e){
		e.preventDefault();
		i=$(this).index()
		board_list.removeClass('active')
		$(this).addClass('active')
		board_box.hide();
		board_box.eq(i).show();
		current.text();
	});

	// board _blank
	var boardBlank=$('.main_board a');
	boardBlank.attr('target','_blank');
	
	// favorite_item
	var favorite_item = new Swiper('.swiper-container.favorite_item', {
	  slidesPerView:9,		
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
	  breakpoints:{
			1400: {
			  slidesPerView: 8,
			  spaceBetween: 10,
			},
	  }
	});
	
	//favorite btn
	$('.open').show();
	$('.close').hide();
	$('.favorite_btn .open').click(function(){
		$('.open').hide();
		$('.close').show();
	});
	$('.favorite_btn .close').click(function(){
		$('.open').show();
		$('.close').hide();
	});
	
	// sns_panel
	var sns_panel = new Swiper('.swiper-container.sns_panel', {
	  slidesPerView:5,		
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },	  
	});
	
	// sns_tab
	$('.facebookItem .swiper-container').show();
	$('.blogItem .swiper-container').hide();
	$('.youtubeItem .swiper-container').hide();
	$('.sns_tab .facebookBtn button').click(function(){
		$('.sns_panel .blogItem .swiper-container').hide();
		$('.sns_panel .youtubeItem .swiper-container').hide();
		$('.sns_panel .facebookItem .swiper-container').show();
		return false;
	});
	$('.sns_tab .blogBtn button').click(function(){
		$('.sns_panel .facebookItem .swiper-container').hide();
		$('.sns_panel .youtubeItem .swiper-container').hide();
		$('.sns_panel .blogItem .swiper-container').show();
		return false;
	});
	$('.sns_tab .youtubeBtn button').click(function(){
		$('.sns_panel .facebookItem .swiper-container').hide();
		$('.sns_panel .blogItem .swiper-container').hide();
		$('.sns_panel .youtubeItem .swiper-container').show();
		return false;
	});
	
	// banner_list
	var banner_list = new Swiper('.swiper-container.banner_list', {
	  direction: 'vertical',
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },	  
	  autoplay: {						
		delay: 3500,					
		disableOnInteraction: false,
		loop: true,
	  },
	  navigation: {						
		nextEl: '#banner .next',	
		prevEl: '#banner .pre',	
	  }
	});
	
	//banner_list stop, start
	$('#banner .start').hide();
	$('#banner .pause').click(function(){
		banner_list.autoplay.stop();
		$('#banner .pause').hide();
		$('#banner .start').show();
	});
	$('#banner .start').click(function(){
		banner_list.autoplay.start();
		$('#banner .pause').show();
		$('#banner .start').hide();
	});

});