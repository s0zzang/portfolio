jQuery(function(){
	var wheelDelta = 0; 
 	var browser = 0;
  
    //슬라이드
	var slideWrap=$('.slide_wrap');
	var slides=slideWrap.find('.slides');
	var slide=slides.find('.slide');
	var slideWidth=slide.outerWidth();
	var slideLen=slide.length;
	var nextBtn=$('#project .right, .scroll');
	var prevBtn=$('#project .left');
	var cnt=0;
	slides.css('width',slideWidth*slideLen+'px');	
  
  var that = null;  
	$('.section').each(function(index){ 
		$(this).on('mousewheel DOMMouseScroll', function(event){
			event.preventDefault();
			browser = window.navigator.userAgent.toLowerCase().indexOf('firefox');
			if( browser>=0 ){
				wheelDelta = -event.detail*40; 
			}else{ 
				wheelDelta = event.originalEvent.wheelDelta;
			}	

			//휠 방향 체크 제어문
			if( wheelDelta < 0 ){
				if( index < $('.section').length-1 ){ 
					if(index!=2){
						$('html,body').stop().animate({scrollTop: $(this).next().offset().top },500);		
						startAnimation(index);					
					}else{ 
						that = $(this);
						nextSlide();
					}
				}					
			}
			else{ 
				if(index>0){	
					if(index!=2){
						$('html,body').stop().animate({scrollTop: $(this).prev().offset().top },500);				
					}else{ 
						that = $(this);
						prevSlide(); 
					}							
				}	
			}

			//슬라이드 스크롤이벤트처리 시작
			//다음 슬라이드 함수
			function nextSlide(){
				var wrap = $('.slide_wrap');
				if(!wrap.is(':animated')){
					cnt++;
				}
				if(cnt>=5){
					cnt=5; 
				}
				wrap.stop().animate({top:-650*cnt},500, function(){
					if(cnt==5){ 
						$('html,body').stop().animate({scrollTop: that.next().offset().top },500);
					}
				});
				pageFn();
			}							
			//이전 슬라이드 함수
			function prevSlide(){
				if(!$('.slide_wrap').is(':animated')){
					cnt--; 
				}
				if(cnt<=0){ 
					cnt=0; 
				}
				$('.slide_wrap').stop().animate({top:-650*cnt},500, function(){
					if(cnt==0){
						$('html,body').stop().animate({scrollTop: that.prev().offset().top },500);
					}
				});
				pageFn();
			}
    	});  //mousewheel DOMMouseScroll 이벤트 끝        
	}); // section 객체배열 처리 each() 메서드 끝


				// 슬라이드 버튼 이벤트	
				function mainSlide(){
					$('.slide_wrap').stop().animate({top:-650*cnt},500);
					pageFn(); 
				}

				//페이지 네이션(인디게이터) 함수
				function pageFn(){
					$('.page-btn').removeClass('active');
					$('.page-btn').eq(cnt).addClass('active');
				}

				//페이지 버튼 이벤트
				$('.page-btn').each(function(idx){
					$(this).click(function(){
						cnt=idx; 
						pageFn(); 
						mainSlide();
					});
				});

                //좌우버튼
				nextBtn.click(function(){
					cnt++;
					cnt>=5?cnt=5:cnt;
					mainSlide();
				})	
				prevBtn.click(function(){
					cnt--;
					cnt<=0?cnt=0:cnt;
					mainSlide();
				})

				// profile effect
				function startAnimation(a){					
					var project = slide.eq(a).offset().top;		
					var list =$('.list');							
					if(0<=project){
						list.addClass('active');
					}else{
						list.removeClass('active');
					}}
				

});





