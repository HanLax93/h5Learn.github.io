document.addEventListener('wheel',wheelScroll,false);
document.addEventListener('wheel',wheelMove,false);
var wheelClock;
var bannerClock;
var moveWheel=true;
var stopWheel=false;

function banneraAnimation(){
    $(".banner-a").show();
    $(".banner-middle-a").css({animation: "banner-middle-show 3s forwards linear"});
    $("div[id='banner']").show();
    $("div[id='banner']").css({animation:"banner-text-show forwards",animationDelay:"1.3s"});
    $("div[id='bannern']").css({animation:"banner-text-show forwards",animationDelay:"2s"});
}

function bannerbAnimation(){
    $(".banner-b").show();
    $(".banner-middle-b").css({animation: "banner-middle-show 3s forwards linear"});
    $("div[id='banner']").show(); 
    $("div[id='banner']").css({animation:"banner-text-show forwards",animationDelay:"1.3s"});
    $("div[id='bannern']").css({animation:"banner-text-show forwards",animationDelay:"2s"});
}

function bannercAnimation(){
    $(".banner-c").show();
    $(".banner-middle-c").css({animation: "banner-middle-show 3s forwards linear"});
    $("div[id='banner']").show(); 
    $("div[id='banner']").css({animation:"banner-text-show forwards",animationDelay:"1.3s"});
    $("div[id='bannern']").css({animation:"banner-text-show forwards",animationDelay:"2s"});
}

function bannerdAnimation(){
    $(".banner-d").show();
    $(".banner-middle-d").css({animation: "banner-middle-show 3s forwards linear "});
    $("div[id='banner']").show(); 
    $("div[id='banner']").css({animation:"banner-text-show forwards",animationDelay:"1.3s"});
    $("div[id='bannern']").css({animation:"banner-text-show forwards",animationDelay:"2s"});
}

function interestsTextShow(){
    $("div[id='interests-a']").css({animation:"banner-text-show 2s forwards linear"});
    $("div[id='interests-b']").css({animation:"banner-text-show 2s forwards linear",animationDelay:"1s"});
    $("div[id='interests-c']").css({animation:"banner-text-show 2s forwards linear",animationDelay:"2s"});
    $("div[id='interests-d']").css({animation:"banner-text-show 2s forwards linear",animationDelay:"3s"});
    $("div[id='interests-e']").css({animation:"banner-text-show 2s forwards linear",animationDelay:"4s"});
    $("div[id='interests-f']").css({animation:"banner-text-show 2s forwards linear",animationDelay:"5s"});
    $("div[id='interests-g']").css({animation:"banner-text-show 2s forwards linear",animationDelay:"6s"});
    $("div[id='interests-h']").css({animation:"banner-text-show 2s forwards linear",animationDelay:"7s"});
}

function wheelScroll(event){
	var detail = event.wheelDelta || event.detail;
	var moveForward = 1;
	var moveBack = -1;
	var step = 0;	
	if(detail > 0){
        step = moveBack*200;    
        $(".sea_wave").css({animation :"waveBack 4.8s"});
        $(".boat").css("background-image","url(img/boat_mirror.png)");
        
    }
    else{
        step = moveForward * 200;
        $(".sea_wave").css({animation:"waveForward 4.8s"});
        $(".boat").css({"background-image":"url(img/boat.png)",transition:"0.2s"});
        // $(".cloud1").css({animation:"aboutCloud 8s ease-in-out reverse"});
    }
			
    document.documentElement.scrollLeft += step;	
    
    // console.log(document.documentElement.scrollLeft);
    var disLeft = document.documentElement.scrollLeft;
    if(disLeft>4951&&disLeft<6550){
        banneraAnimation();
    }
    else{
        $(".banner-a").hide();
    }

    if(disLeft>7069&&disLeft<8460){
        bannerbAnimation();
    }
    else{
        $(".banner-b").hide();
    }
    if(disLeft>8999&&disLeft<10599){
        bannercAnimation();
    }
    else{
        $(".banner-c").hide();
    }
    if(disLeft>10790&&disLeft<12590){
        bannerdAnimation();
    }
    else{
        $(".banner-d").hide();
    }
    if(disLeft>15700&&disLeft<16700){
        interestsTextShow();
    }
    else{
        $(".interests-text-a").css({animation:"none"});
    }

    if(disLeft>17960&&disLeft<19170){
        interestsTextShow();
    }
    else{
        $(".interests-text-b").css({animation:"none"});
    }
    if(disLeft>=19700){
        $(".sea_wave").css({animation:'none'});
    }
}
    
function wheelMove(){
    if(moveWheel==true) {
        moveWheel=false;
        stopWheel=true;
        wheelClock=setTimeout(wheelStop,200);
    }
    // else {
    //     clearTimeout(wheelClock);
    //     wheelClock=setTimeout(wheelStop,150);
    // }
}

function wheelStop(){
    if(stopWheel==true){
        moveWheel=true;
        stopWheel=false;
        $(".sea_wave").css({animation:"none"});
    }
}

function gmplay(){
    document.getElementById("gm").volume=0.1;
    document.getElementById("gm").play();
}

function gmpause(){
    document.getElementById("gm").pause();
}

function removeShade(){
    document.getElementById("main-shade").remove();
    document.getElementById("shade-button").remove();
    $("html,body").css({position:'absolute'});
}

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

// function bannerAnimation(){
//     $(".banner-a").show();
//     $("div[id='banner-a']").hide();
//     $(".banner-middle").css({animation: "banner-middle-show 3s forwards ease-in-out "});
//     // $(".banner-middle")[0].addEventListener("animationend",function(){
            
//     // });
//     $("div[id='banner-a']").show();
//     $("div[id='banner-a']").css({animation:"banner-text-show forwards",animationDelay:"1.5s"});
//     $("div[id='banner-ac']").css({animation:"banner-text-show forwards",animationDelay:"2s"});

//     //拉回
//     $("div[id='banner-ac']").css({animation:"banner-text-hide forwards",animationDelay:"10s"});
//     $(".banner-middle").css({animation: "banner-middle-hide 3s forwards ease-in-out "});
//     $("div[id='banner-a']").css({animation:"banner-text-hide forwards",animationDelay:"1.5s"});

//     $(".banner-middle").css({animation: "banner-middle-show 3s forwards ease-in-out "});
//     // $(".banner-middle")[0].addEventListener("animationend",function(){
            
//     // });
//     $("div[id='banner-a']").show();
//     $("div[id='banner-a']").css({animation:"banner-text-show forwards",animationDelay:"1.5s"});
//     $("div[id='banner-ac']").css({animation:"banner-text-show forwards",animationDelay:"2s"});

// }