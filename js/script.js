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
        $(".circle_wrap").addClass("on");
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

//카운팅 될 숫자값 배열로 저장
let countArray = [90,90,80,70,65,80,70,80];

//배열 안에 있는 갯수만큼 반복문으로 숫자 카운팅 작업
for(let i=0; i < countArray.length; i++){

    //카운팅 기능은 함수를 만들어서 작업 (카운팅될숫자값,circle순번값)
    autoCount(countArray[i],i);
} 

//카운팅되는 기능 함수로 정의
function autoCount(result,index){ //매개변수 받아주기 result,index
    //초기값 숫자
    let start = 0;

    //숫자 카운팅 setInterval 구간
    let plus = setInterval(function(){
        start += 1; //1씩 숫자 증가
        if(start >= result){
            clearInterval(plus); //숫자 카운팅 중지
            document.querySelectorAll(".circle")[index].querySelector(".count").innerHTML = result + "%";
        }
        else{
            document.querySelectorAll(".circle")[index].querySelector(".count").innerHTML = start + "%";
        }
    },20);
}

// const conts = document.querySelectorAll(".cont");
// let scrollPoint = 0; //휠 내리고 올렸을 떄 이전,이후 위치값 변수

// conts.forEach(function(items,index){
//     items.addEventListener("wheel",function(e){



//         if(e.wheelDelta > 0){
//             if(index != 0){
//                 scrollPoint = e.currentTarget.previousElementSibling.offsetTop;
//             }
//         }
//         else if(e.wheelDelta < 0){
//             if(index != conts.length-1){
//                 scrollPoint = e.currentTarget.nextElementSibling.offsetTop;
//             }
//         }
        
//         window.scrollTo({
//             top:scrollPoint,
//             behavior:"smooth"
//         });
       
//     });
// });