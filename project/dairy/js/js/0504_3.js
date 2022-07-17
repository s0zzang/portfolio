$(function(){
	var visual=$('#brandVisual>ul>li'),
		button=$('#buttonList>li'),
		leftBtn=$('.btnImg .prev'),
		rightBtn=$('.btnImg .next'),
		current=0,
		setIntervalId;
	timer();
	function timer(){
	setIntervalId = setInterval(function(){
		var prev=visual.eq(current);
		var pn=button.eq(current)
		move(prev,0,'-100%');
		pn.removeClass('on');
		current++
		if(current==visual.size()){current=0;}
		var next=visual.eq(current);
		var pnn=button.eq(current);
		pnn.addClass('on');
		move(next,'100%',0);
	},3000)}
	function move(tg, start, end){
		tg.css('left',start).stop().animate({left:end})
	}
	// indicator click 
	button.click(function(){
		var tg=$(this);
		var i=tg.index();
		button.removeClass('on');
		tg.addClass('on');
		move1(i);
	})
	function move1(i){							
	// button.click 에서 i 받아옴
		if(current==i)return			// 현재보이는 이미지와 i와 같으면 종료
		var currentEl=visual.eq(current);		// current=0
		var nextEl=visual.eq(i);				// tg의 index (this)
		currentEl.css({left:0}).stop().animate({left:'-100%'},500);
		nextEl.css({left:'100%'}).stop().animate({left:0},500);
		current=i;
	}
	// right button
	rightBtn.click(function(){
		var prev=visual.eq(current);
		var pn=button.eq(current);
		move(prev,0,'-100%');
		pn.removeClass('on');
		current++;
		if(current==visual.size()){current=0;}
		var next=visual.eq(current);
		var pnn=button.eq(current);
		move(next,'100%',0);
		pnn.addClass('on');
	})
	// left button
	leftBtn.click(function(){
		var prev=visual.eq(current);
		var pn=button.eq(current);
		move(prev,0,'100%');
		pn.removeClass('on');
		current--;
		if(current==-visual.size()){current=0;}
		console.log(current);
		var next=visual.eq(current);
		var pnn=button.eq(current);
		move(next,'-100%',0);
		pnn.addClass('on');
	})
	// start, stop
	$('#wrap').hover(function(){
		clearInterval(setIntervalId);
	},function(){
		timer();
	})
})