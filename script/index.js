

const swiper = new Swiper('#best_items_wrap',{
    slidesPerView: '5',
    slidePerGroup:1,
    spaceBetween:20,
    loop:false,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    scrollbar:{
        el:'.swiper-scrollbar',
        draggable:true,
        hide:false,
    },
    watchOverflow:true,
});
const addswiper = new Swiper('.add',{
    slidesPerView: 'auto',
    slidePerGroup:1,
    loop:false,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    scrollbar:{
        el:'.swiper-scrollbar',
        draggable:true,
        hide:false,
    },
    watchOverflow:true,
});

const gnb =document.querySelector('.gnb');
const lnb =document.querySelector('.lnb_bg');
gnb.addEventListener('mouseenter', ()=> {
    lnb.style.display ='block';

});

gnb.addEventListener('mouseleave',( )=>{
        lnb.style.display='none';

});

lnb.addEventListener('mouseenter',()=>{
    
        lnb.style.display= 'block';
    
});
lnb.addEventListener('mouseleave',()=>{
    
        lnb.style.display= 'none';
    
});