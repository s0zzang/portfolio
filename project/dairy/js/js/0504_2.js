jQuery(document).ready(function(){
	var aside=$('.page-main>aside');
	var asideBtn=aside.find('button');
	asideBtn.click(function(){
		aside.toggleClass('open');
		if(aside.hasClass('open')){
			asideBtn.find('img').attr('src','img/btn_close.png');
		}else{
			asideBtn.find('img').attr('src','img/btn_open.png');
		}
	})
});
