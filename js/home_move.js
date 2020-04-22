$(document).ready(function(){
    $(".note").hover(function(){
        $(".move").css({"margin-left":"60px","transition":"0.5s"})
    });

    $(".about").hover(function(){
        $(".move").css({"margin-left":"120px","transition":"0.5s"})
    });

    $(".note,.about,.home").mouseleave(function(){
        $(".move").css("margin-left","0px")
    });
});