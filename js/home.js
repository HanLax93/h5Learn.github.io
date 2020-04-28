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

$(window).ready(function(){
    document.getElementsByClassName("div_bar")[0].addEventListener("animationend",function(){
                $("html,body").animate({scrollTop:$(".main1").offset().top},1000)
                $(".title3").css({animation:"title3",animationFillMode:"forwards",animationDuration:"2.2s",animationDelay:"1s"});
                document.getElementsByClassName("title3")[0].addEventListener("animationend",function(){
                $(".title4").css({animation:"title4",animationFillMode:"forwards",animationDuration:"1s"});
                document.getElementsByClassName("title4")[0].addEventListener("animationend",function(){
                    $(".main1 .bg").css({animation:"main1_bg",animationFillMode:"forwards",animationDuration:"1s"});
                    $(".main1 .bg1").css({animation:"main1_bg1",animationFillMode:"forwards",animationDuration:"1s"});
                    });
                });
    });
});