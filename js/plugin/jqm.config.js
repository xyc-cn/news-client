define(['jquery'], function ($) {
    document.firstPage = true;
    $.support.cors = true;
    $.ajaxSetup({cache:false});
    $(document).bind("mobileinit", function () {
        //禁用jqm路由
        $.mobile.ajaxEnabled = false;
        $.mobile.linkBindingEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;
        //设置默认转场效果
        $.mobile.defaultPageTransition = 'slide';
        //禁用按键延迟
        $.mobile.reverse = false;
        $.mobile.buttonMarkup.hoverDelay = "false";
        $('div[data-role="page"]').live('pagehide', function (event, ui) {
            $(event.currentTarget).remove();
        });
    });
});

