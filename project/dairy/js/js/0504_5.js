$(function(){
	$(window).scroll(function(){
	//	console.log($(this).scrollTop());
		if($(this).scrollTop() > 200){
			$('.go-top').fadeIn(200);
		}else{
			$('.go-top').fadeOut(200);
		}
	})
	$('.go-top').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:0},500,'easeOutQuart')
	})
})