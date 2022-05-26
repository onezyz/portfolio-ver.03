$(window).on("scroll",function(){
    let scTop = $(window).scrollTop();

    for(let i=0; i < $(".pager > li").length; i++){
        if(scTop >= $(".cont").eq(i).offset().top){
            $(".pager > li").removeClass("on");
            $(".gnb > li").removeClass("on");
            $(".pager > li").eq(i).addClass("on");
            $(".gnb > li").eq(i).addClass("on");
        }
    }

    if(scTop >= $(".aboutMe").offset().top){
        $(".pager").addClass("on");
        $(".circle").addClass("on");
    }
    else{
        $(".pager").removeClass("on");
    }

});

$(".pager > li").on("click",function(e){
    e.preventDefault();

    let pagerIndex = $(this).index();

    let scrollMove = $(".cont").eq(pagerIndex).offset().top;

    $("html,body").stop().animate({"scrollTop":scrollMove},500);
});

$(".gnb > li").on("click",function(e){
    e.preventDefault();

    let pagerIndex = $(this).index();

    let scrollMove = $(".cont").eq(pagerIndex).offset().top;

    $("html,body").stop().animate({"scrollTop":scrollMove},500);
});

$(".scBtn").on("click",function(e){
    e.preventDefault();
    let scrollMove = $(".cont").eq(1).offset().top;
    $("html,body").stop().animate({"scrollTop":scrollMove},500);

});

const conts = document.querySelectorAll(".cont");
let scrollPoint = 0; //휠 내리고 올렸을 떄 이전,이후 위치값 변수

conts.forEach(function(items,index){
    items.addEventListener("wheel",function(e){



        if(e.wheelDelta > 0){
            if(index != 0){
                scrollPoint = e.currentTarget.previousElementSibling.offsetTop;
            }
        }
        else if(e.wheelDelta < 0){
            if(index != conts.length-1){
                scrollPoint = e.currentTarget.nextElementSibling.offsetTop;
            }
        }
        
        window.scrollTo({
            top:scrollPoint,
            behavior:"smooth"
        });
       
    });
});