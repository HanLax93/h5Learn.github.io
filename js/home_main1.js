// $(window).ready(function() {
//     document.getElementsByClassName("div_bar")[0].addEventListener("animationend",function(){
//         document.onmousewheel=function(e){
//             var e=e||window.event;
//             // 非火狐浏览器下e.wheelDelta用来监听浏鼠标的滚轮方向，(window)中向上为正（120），向下为负（-120）
//             if(e.wheelDelta<0){
//                 $("html,body").animate({scrollTop:$(".main1").offset().top},1000);
//             } 
//         }
//         $(".title3").css({animation:"title3",animationFillMode:"forwards",animationDuration:"2.2s"});
//         document.getElementsByClassName("title3")[0].addEventListener("animationend",function(){
//         $(".title4").css({animation:"title4",animationFillMode:"forwards",animationDuration:"1s"});
//         });
//         document.getElementsByClassName("title4")[0].addEventListener("animationend",function(){
//             $(".main1 .bg").css({animation:"main1_bg",animationFillMode:"forwards",animationDuration:"1s"});
//             $(".main1 .bg1").css({animation:"main1_bg1",animationFillMode:"forwards",animationDuration:"1s"});
//             document.onmousewheel=function(e){
//                 var e=e||window.event;
//                 // 非火狐浏览器下e.wheelDelta用来监听浏鼠标的滚轮方向，(window)中向上为正（120），向下为负（-120）
//             if(e.wheelDelta>0){
//                 $("html,body").animate({scrollTop:$(".main").offset().top},1000);
//             }
//         }
//         });
//     });
//         // $(".title3").css({left:"18%",opacity:"0.9",transition:"2.2s"})
//         // $(".title3").animate({left:"18%",opacity:"0.9"},2000);
//         // $("html,body").animate({scrollTop:$("#main1").offset().top},1000);
//         // $("html,body").animate({scrollTop:0},1000);
        
//   })
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