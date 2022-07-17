$(function(){
    var header=$('.header_wrap');
    var sectionMainVisual=$('.sec_mainvis');
    var sectionOverlap=$('.sec_list_overlap');
    var sectionIsMoving=false;      
    /* section이 이동중인지 체크하여, animation이 2번 적용되지 않도록 방지 */
    var sectionMainTop, sectionMainBottom, winScrollTop;

    var parallaxBody=$('.sec_list_overlap');
    var parallaxList=$('.sec_parallax .img_box');
    var parallaxSpeed=1200;
    var parallaxStartValue=1000;
    var parallaxOffsetTop, parallaxThisTop, parallaxPercent, parallaxMoveDisance;


    /* 속성값 가진 함수 */
    function setProperty(){
        winScrollTop=$(window).scrollTop();
        sectionMainTop=sectionMainVisual.offset().top;
        sectionMainBottom=sectionMainTop+sectionMainVisual.height();
        parallaxOffsetTop=parallaxBody.offset().top;
        parallaxThisTop=winScrollTop-parallaxOffsetTop;
        parallaxPercent=parallaxThisTop/parallaxSpeed*100;
        // 이동할 거리의 백분율
        parallaxMoveDisance=Math.max(parallaxStartValue-parallaxStartValue , 
            Math.min(parallaxStartValue , parallaxStartValue-(parallaxStartValue*(parallaxPercent/100))));
            // Math.max(a,b) : a,b 중 큰 값을 산출
            // 0보다 작은 경우를 무시하고 0부터 시작하기 위해서 사용
            // Math.max(0, Math.min(1000, 1000-(이동거리)) )
            // Math.min : 1000 ~ 0 까지만 이동하도록 하는 공식
        console.log(Math.min(parallaxStartValue , parallaxStartValue-(parallaxStartValue*(parallaxPercent/100))))
    };

    function motionParallax(){
        // 검정색 배경으로 변경
        if(parallaxPercent>60){
            $('.sec_parallax').addClass('active');
        }else{
            $('.sec_parallax').removeClass('active');
        }
        // 이미지 스르륵 이동
        // transform : translate(0,50%)
        parallaxList.eq(0).css({transform:'translate(0px,'+parallaxMoveDisance+'px)'})
        parallaxList.eq(2).css({transform:'translate(0px,'+parallaxMoveDisance*1.5+'px)'})
        parallaxList.eq(3).css({transform:'translate(0px,'+parallaxMoveDisance*3.4+'px)'})
        parallaxList.eq(4).css({transform:'translate(0px,'+parallaxMoveDisance*2.7+'px)'})
        parallaxList.eq(5).css({transform:'translate(0px,'+parallaxMoveDisance*2.1+'px)'})
        parallaxList.eq(6).css({transform:'translate(0px,'+parallaxMoveDisance*2.5+'px)'})
        parallaxList.eq(7).css({transform:'translate(0px,'+parallaxMoveDisance*1.9+'px)'})
        parallaxList.eq(1).css({transform:'translate(0px,'+parallaxMoveDisance*2.1+'px)'})    
        // 다른 속도로 올라오기 위해 임의 숫자 곱셈
        $('.sec_parallax .bg_line').css({transform:'translate(0px,'+ -parallaxMoveDisance*2+'px)'});
    }

    /* moveStartRender 를 조건에 따라 실행 */
    function moveSection(){
        setProperty();      /* 속성을 알아야 실행하니까 부르기 */
        motionParallax();
        if(winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom){
            if(!sectionIsMoving){
                sectionIsMoving=true;
                moveStartRender();
            };
            console.log('section in');
        }if(winScrollTop >= sectionMainBottom){
            activeCheck(); 
            // section2, section3에 진입하면 무조건 activeCheck 실행
        };
    };

    /* 실질적으로 움직이고 클래스를 붙여주는 역할 */ 
    function moveStartRender(){
        if(!header.hasClass('active')){
            // .avtive 붙이기
            header.addClass('active');
            sectionMainVisual.addClass('active');
            sectionOverlap.addClass('active');
            // 한번에 스크롤 내리기
            $('html').stop().animate({scrollTop:sectionMainBottom+1},500,function(){
                sectionIsMoving=false;})
                // sectionMainBottom + 1 : 낮은 버전 IE 덜덜 떨리며 내려오는 버그 방지
        }else{
            // .active 지우기
            header.removeClass('active');
            sectionMainVisual.removeClass('active');
            sectionOverlap.removeClass('active');
            // 한번에 스크롤 올라가기
            $('html').stop().animate({scrollTop:sectionMainTop},500,function(){
                sectionIsMoving=false;})
        }
    }

    /* 페이지 아래쪽에서 새로고침을 했을 때 .active를 붙여주는 역할 */
    function activeCheck(){
        header.addClass('active');
        sectionMainVisual.addClass('active');
        sectionOverlap.addClass('active');
    }

    function init(){
        moveSection();
    }

    $(window).scroll(function(){
        moveSection();
    })

    init();
}) 