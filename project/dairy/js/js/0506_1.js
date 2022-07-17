$(function(){
	var gallery=$('.gallery .list');
	var breakList=10; 	// list 호출 멈추기 위한 변수
	var listCount=0;	// list 호출 count 하는 변수
	var winTop;			// 스크롤바의 위치값을 담음
	var onTop;			// 스크롤이 문서 하단에 도착했는지를 확인하는 변수
	
	function getList(){
		var list;
		listCount++
		if(listCount > breakList){list=null;}	// null : 없음
		else{
			list='<li><img src="images/001.jpg"/></li>'
			list +='<li><img src="images/002.jpg"/></li>'
			list +='<li><img src="images/003.jpg"/></li>'
			list +='<li><img src="images/004.jpg"/></li>'
		}
		return list;	// 함수를 호출했던 위치로 다시 돌아가 
	}
	
	function listCall(){
		winTop=$(window).scrollTop();
		onTop=$(document).height()-$(window).height()-$('.footer').height();
		if(winTop>=onTop){		// 스크롤이 문서 하단에 도착한 경우
			var data = getList();
			if(data !==null){
				gallery.append(data)
			}else{
				return false;
			}
		}
	}
	
	$(window).scroll(function(){
		listCall();
	})
})