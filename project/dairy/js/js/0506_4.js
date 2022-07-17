jQuery(document).ready(function(){
	var scrollStage=$('.scene');
	var scrollRange=110;
	var bg=scrollStage.find('.bg>div');
	var bat=scrollStage.find('.bat');
	var vampire=scrollStage.find('.vampire');
	var scrollTotal, scrollHeight, winScrollTop, percent, batRange;
	
	// 속성정의
	function scrollVal(){
		scrollTotal=scrollStage.height();
		scrollHeight=(scrollTotal-$(window).height());
		winScrollTop=$(window).scrollTop();
		var scrollPercent=winScrollTop/scrollHeight;
		percent=scrollPercent*100;
		batRange=scrollPercent*scrollRange;
	}
	
	// 모든 함수 한번에 실행할 준비
	function scene1(){
		scrollVal();
		cgBg();
		batMove();
	}
		
	// 배경변경
	function cgBg(){
		if(percent<25){setBackground(0);}
		else if(25<=percent && percent<50){setBackground(1);}
		else if(50<=percent && percent<75){setBackground(2);}
		else if(75<=percent && percent<100){setBackground(3); vampire.addClass('active')}
	}
	
	// 스크롤에 따른 배경 클래스 추가/제거
	function setBackground(i){
		bg.removeClass('active');
		bg.eq(i).addClass('active');
	}

	// 박쥐의 이동거리
	function batMove(){
		bat.css({transform:'translate(0px,'+batRange+'px)'})
	}
	
	// 스크롤 발생시 모든 함수 실행
	$(window).scroll(function(){
		scene1();
	})
});
