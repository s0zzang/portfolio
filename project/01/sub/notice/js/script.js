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
	
	//board accordion
	var wrap=$('#board .tr'),
		openTit=wrap.find('.title label'),
		//cont=wrap.find('.content_wrap'),
		wraph=wrap.height(),
		wrapH=wrap.outerHeight();
	openTit.click(function(){
		wrap.height(wraph);
		var tg=$(this).parents('.tr');
		var contT=tg.find('.content_wrap').outerHeight();
		var cont=$(this).siblings('.content_wrap');
		tg.stop().animate({height:wrapH+contT+20},300);
		cont.addClass('active');
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
	
	// kogl button
	var btn=$('.manager_info button');
	var exp=$('.manager_info .explanation');
	btn.click(function(){
		exp.toggleClass('active');
	})

});