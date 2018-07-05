$(function(){
    for(let i=1;i<11;i++){
        let str=`<img src="../img/gallery${i}.jpg" alt="">`;
        $('.allImg li').append(str);
    }
});

let more=$('.more');
let choiceMenu=$('.choiceMenu');
let i=1;
more.click(function(){
    choiceMenu.stop(true);
    if(i==1){
        choiceMenu.slideDown();
        i=0;
    }
    else{
        choiceMenu.slideUp();
        i=1;
    }
});