$(function(){
    // $('.w400 img').each(function(){
    //     $(this).click(function(){
    //         $(this).find($('.list')).fadeIn();
    //     })
    // })

    $('.w400>span img').click(function(){
        $(this).parent('span').next($('.list')).slideToggle(500);
    })
    $('.list>li>span').click(function(){
        $(this).next($('ul')).slideToggle(500);
    })
})