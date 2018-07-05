let pic=$('.slide');
let stopLoop=$('.stopLoop');
let btnL=$('.button-prev');
let btnR=$('.button-next');
// console.log(pic, banner, btnL, btnR);
loop(pic,stopLoop,btnL,btnR);
function loop(pic,stopLoop,btnL,btnR){
    let boxWidth=pic.width();
    // console.log(boxWidth);
    let current=0;
    let next=0;
    let flag=true;
    let t=setInterval(moveForward,3000);

    stopLoop.mouseenter(function(){
        clearInterval(t);
    });
    stopLoop.mouseleave(function(){
        t=setInterval(moveForward,3000);
    });

    function moveForward(){
        next++;
        if(next>pic.length-1){
            next=0;
        }
        pic.eq(next).css({left:boxWidth+'px'},1500);
        pic.eq(current).animate({left:-boxWidth},1500);
        pic.eq(next).animate({left:0},1500,function(){
            flag=true;
        });
        current=next;
    }
    function moveBack(){
        next--;
        if(next<0){
            next=pic.length-1;
        }
        pic.eq(next).css({left:-boxWidth+'px'},1500);
        pic.eq(current).animate({left:boxWidth},1500);
        pic.eq(next).animate({left:0},1500,function(){
            flag=true;
        });
        current=next;
    }

//左右点击
    btnL.click(function(){
        if(!flag){
            return;
        }
        flag=false;
        moveBack();
    });
    btnR.click(function(){
        if(!flag){
            return;
        }
        flag=false;
        moveForward();
    });
}

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