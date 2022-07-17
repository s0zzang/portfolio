jQuery(document).ready(function(){
	$('.bat').hover(function(){
		$(this).removeClass('down').addClass('up')
	},function(){
		$(this).removeClass('up').addClass('down')
	})
	// 마우스 따라 움직이기
	$(document).mousemove(function(e){
		$('.batWrap').css({'top':e.pageY,'left':e.pageX})
	})
});
