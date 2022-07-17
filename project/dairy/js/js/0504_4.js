jQuery(document).ready(function(){
	// top에서 header까지의 거리, header가 상단에 위치할 때 스크롤의 위치 
	var win=$(window), 
		header=$('.page-header'),
		headerClone=header.contents().clone(),
		headerCloneContainer=$('<div class="page-header-clone">/div>'),
		seperator=header.offset().top+header.outerHeight();
	headerCloneContainer.append(headerClone);
	headerCloneContainer.appendTo('body');
	
	// on : scroll click 등 여러가지 이벤트를 한번에 사용 가능
	win.on('scroll',$.throttle(1000/15,function(){
		if(win.scrollTop()>seperator){
			headerCloneContainer.addClass('visible')
		}else{
			headerCloneContainer.removeClass('visible')
		}
	}))
});
