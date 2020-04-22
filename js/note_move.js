$(document).ready(function(){
    $(".home").hover(function(){
        $(".move").css({"margin-left":"0px","transition":"0.5s"})
    });

    $(".about").hover(function(){
        $(".move").css({"margin-left":"120px","transition":"0.5s"})
    });

    $(".home,.about").mouseleave(function(){
        $(".move").css("margin-left","60px")
    });
});