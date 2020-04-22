$(document).ready(function(){
    $(".home").hover(function(){
        $(".move").css({"margin-left":"0px","transition":"0.5s"})
    });

    $(".note").hover(function(){
        $(".move").css({"margin-left":"60px","transition":"0.5s"})
    });

    $(".home,.note").mouseleave(function(){
        $(".move").css("margin-left","120px")
    });
});