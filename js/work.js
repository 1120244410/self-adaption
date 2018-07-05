let galleryLi=$('.lists>.li3>#gallery li');

galleryLi.eq(0).css({'top':1.8+'rem','left':1.2+'rem'});
galleryLi.eq(1).css({'top':1+'rem','left':0.6+'rem'});
galleryLi.eq(2).css({'top':0.6+'rem','left':2+'rem'});
galleryLi.eq(3).css({'top':0.8+'rem','left':2.6+'rem'});
galleryLi.eq(4).css({'top':0.36+'rem','left':3.6+'rem'});
galleryLi.eq(5).css({'top':1+'rem','left':5+'rem'});
galleryLi.eq(6).css({'top':2+'rem','left':3.2+'rem'});
$('.lists>.li3>a').mouseenter(function(){
    galleryLi.stop(true);
    galleryLi.eq(0).animate({'top':1.2+'rem','left':1.2+'rem'},Math.floor(Math.random()*200+500));
    galleryLi.eq(1).animate({'top':1.2+'rem','left':1.8+'rem'},Math.floor(Math.random()*300+500));
    galleryLi.eq(2).animate({'top':1.2+'rem','left':2.4+'rem'},Math.floor(Math.random()*300+600));
    galleryLi.eq(3).animate({'top':1.2+'rem','left':2.8+'rem'},Math.floor(Math.random()*300+600));
    galleryLi.eq(4).animate({'top':1.2+'rem','left':3.3+'rem'},Math.floor(Math.random()*300+500));
    galleryLi.eq(5).animate({'top':1.2+'rem','left':3.9+'rem'},Math.floor(Math.random()*200+500));
    galleryLi.eq(6).animate({'top':1.2+'rem','left':4.5+'rem'},Math.floor(Math.random()*300+500));
});
$('.lists>.li3>a').mouseleave(function(){
    galleryLi.stop(true);
    galleryLi.eq(0).animate({'top':1.8+'rem','left':1.2+'rem'},Math.floor(Math.random()*300+500));
    galleryLi.eq(1).animate({'top':1+'rem','left':0.6+'rem'},Math.floor(Math.random()*300+500));
    galleryLi.eq(2).animate({'top':0.6+'rem','left':2+'rem'},Math.floor(Math.random()*400+500));
    galleryLi.eq(3).animate({'top':0.8+'rem','left':2.6+'rem'},Math.floor(Math.random()*300+600));
    galleryLi.eq(4).animate({'top':0.36+'rem','left':3.6+'rem'},Math.floor(Math.random()*300+500));
    galleryLi.eq(5).animate({'top':1+'rem','left':5+'rem'},Math.floor(Math.random()*200+500));
    galleryLi.eq(6).animate({'top':2+'rem','left':3.2+'rem'},Math.floor(Math.random()*300+600));
});