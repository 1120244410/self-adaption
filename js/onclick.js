let btn=$('#caidan');
let menu=$('#menu');
let i=1;
btn.click(function(){
    if(i==1){
        menu.slideDown();
        i=0;
    }
    else{
        menu.slideUp();
        i=1;
    }
});

let head=$('header');
$(window).scroll(function(){
    let scrollH=$(document.body).scrollTop()||$(document.documentElement).scrollTop();
    console.log(scrollH);
    if(scrollH>200){
        head.slideUp();
    }
    if(scrollH<200){
        head.slideDown();
    }
});