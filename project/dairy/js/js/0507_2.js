$(function(){
    // sec02
    new Typed('.typed', {
        strings: ['열심히 하겠습니다!'],
        // ^1000 : 1초 후에 입력 시작 (ex : First ^1000 sectence)
        // sytle : 클래스 추가해서 css로 조정
        typeSpeed: 100,          // typing 속도
        startDelay: 1200,       // typing 시작 전 속도
        backSpeed:20,           // 역주행 속도
        backDelay:500,          // 역주행 전 지연
        loop:true,              // 무한반복
        showCursor:true,        // cursor show/hide
        cursorChar:'^0^',       // 커서 모양 변경
        });

    // sec03
    $.fn.sectionIn=function(a){                // $.fn.'name' 사용자 정의 메서드 : 제이쿼리 함수를 직접 추가
        var el=$(this);                        // sec01 진입시 this = sec01
        var startFn=a;                         // a = 익명함수에서 전달받을 매개변수
        var sct;
        var secTop;
        var secBottom;
        var secHeight;                         // 섹션 높이
        var speed;                             // 섹션 진입 전 미리 애니메이션 실행

        function property(){
            speed=$(window).height()/2;        // 섹션 전체 높이의 절반 오면 
            sct=$(window).scrollTop();
            secTop=el.offset().top-speed;      // secTop에 도달 시 .on 예정
            secHeight=el.height();
            secBottom=secHeight+secTop+speed;  // secTop = -speed 된 값이라 다시 더해줌
        }

        function sec(){
            property();
            if(sct>=secTop && sct<=secBottom){
                startFn();                     // 매개변수 a로 전달된 익명함수 실행 
            }
        }
        $(window).scroll(function(){sec();})   // 스크롤 시 함수 호출
        $(window).resize(function(){sec();})   // 윈도우 창 사이즈 변경시 함수 호출
        sec();                                 // 실행할 때도 함수 호출
    }             

    $(function(){                              // 익명함수
        $('.sec01').sectionIn(function(){      // 스크롤 탑이 섹션 1에 진입했는지 확인해주는 함수
            $('.sec01').addClass('on')
        })
        $('.sec03').sectionIn(function(){ 
            $('.sec03 .img').addClass('on')
        })
        $('.sec03').sectionIn(function(){ 
            $('.sec03 .text').addClass('on')
        })
        $('.sec04').sectionIn(function(){ 
            $('.sec04').addClass('on')
        })
        $('.sec05').sectionIn(function(){ 
            $('.sec05').addClass('on')
        })
    })
    
})