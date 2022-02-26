$(function(){
    //HTMLを読み込んだらここに書いたことを実行します。
    $(".js-nav_links li").hover(function() {
        $(this).css('background-color', 'black')
        $(this).css('color', 'white')
    },
    function() {
        $(this).css('background-color', 'transparent')
        $(this).css('color', 'black')
    })

    $('a.js_list').click(function() {
        var to = $(this).attr("href")
        var $content = $('.js_' + to)

        if (!$content.hasClass('js_active')) {
            $('.js_active').stop().slideUp();
            $('.js_active').toggleClass('js_active')
            $($content).stop().slideDown();
            $($content).addClass('js_active')
        }
        else {
            $('.js_active').stop().slideUp();
            $('.js_active').toggleClass('js_active')
        }

        return false;
    })
});