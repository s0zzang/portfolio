$(function(){
	
	// css : 모니터 hover, top 좌표 이동
	$('.hidden').hover(
		function(){
			var ah=$(this).innerHeight(); // 높이 + 패딩
			var img=$(this).find('img');
			var imgh=img.innerHeight();
			img.stop().animate({top:ah-imgh},3000);
		},function(){
			var img=$(this).find('img');
			img.stop().animate({top:0},3000);
	});
	
	// css : 스크롤, left right 좌표 이동
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var csst=$('#css1').offset().top;
		if(csst-600<sct){
			$('.css1_left').stop().animate({left:'5px'},1000);
			$('.css1_right').stop().animate({right:'10px'},1000);
		}else{
			$('.css1_left').stop().animate({left:'-600px'},1000);
			$('.css1_right').stop().animate({right:'-600px'},1000);
		}
	});
	
	// jquery : 스크롤, left right 좌표 이동
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var jst=$('#css1').offset().top;
		if(jst-200<sct){
			$('.jquery1_text_one>ul').slideDown(1000);
			$('.jquery1_text_two>ul').slideDown(1000);
		}
	});

	// jquery : 모니터 hover
	$('.hidden02').hover(
		function(){
			var ah=$(this).innerHeight();
			var img=$(this).find('img');
			var imgh=img.innerHeight();
			img.stop().animate({top:ah-imgh},3000);
		},function(){
			var img=$(this).find('img');
			img.stop().animate({top:0},3000);
	})
	
	
});