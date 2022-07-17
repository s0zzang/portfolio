jQuery(document).ready(function(){

  // lnb
  var win=$(window), 
    menu=$('#menu'),
    lnb=$('#lnb'),
    lnbClone=lnb.contents().clone(),
    lnbCloneContainer=$('<div class="lnb_clone">');
    lnbCloneContainer.append(lnbClone);
    lnbCloneContainer.appendTo(menu);
    clone=$('.lnb_clone'),
  
  win.on('scroll',$.throttle(10,function(){
    if(win.scrollTop()>=1){
      clone.addClass('visible');
      lnb.addClass('off');
    }else{
      clone.removeClass('visible');
      lnb.removeClass('off');
    }
  }))	
  
    // scroll
    var sec02 = $('#section2');
    var sec03 = $('#section3');
    var footer = $('#footer');
    var li01 = $('#lnb li:nth-child(1), .lnb_clone li:nth-child(1)');
    var li02 = $('#lnb li:nth-child(2), .lnb_clone li:nth-child(2)');
    var li03 = $('#lnb li:nth-child(3), .lnb_clone li:nth-child(3)');
    var li05 = $('#lnb li:nth-child(5), .lnb_clone li:nth-child(5)');
    li03.click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},1000,'easeOutQuart')
    })    
    li01.click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:sec02.offset().top},1000,'easeOutQuart')
    })    
    li02.click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:sec03.offset().top},1000,'easeOutQuart')
    })    
    li05.click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:footer.offset().top},1000,'easeOutQuart')
    })    

    // profile
    $('#profile .list').click(function(){
        $('.pupup').addClass('active');
    });
    $('.popup_bg, .close').click(function(){
        $('.pupup').removeClass('active');
    });

    // project hover scroll
    $('.webImg').hover(function(){
        var ah=$(this).innerHeight();
        var img=$(this).find('img');
        var imgh=img.innerHeight();
        $(this).addClass('hover');
        img.stop().animate({top:ah-imgh},2300);
      },function(){
        var img=$(this).find('img');
        img.stop().animate({top:0},2300);
    })

    $('.m_img').hover(function(){
        var ah=$(this).innerHeight();
        var img=$(this).find('img');
        var imgh=img.innerHeight();
        $(this).addClass('hover');
        img.stop().animate({top:ah-imgh},2300);
      },function(){
        var img=$(this).find('img');
        img.stop().animate({top:0},2300);
    })
});
