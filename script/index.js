

const swiper = new Swiper('.best_items_wrap',{
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
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    scrollbar:{
        el:'.swiper-scrollbar',
        draggable:true,
        hide:false,
    },
    watchOverflow:true,
});



const lookbookSwiper = new Swiper('#look_book',{
    slidesPerView: 'auto',
    slidePerGroup:1,
    loop:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '#lookb_next',
      prevEl: '#lookb_prev',
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

const categoryList = document.querySelectorAll('.category_list li');
const swiperWraps = document.querySelectorAll('.best_items_wrap');

categoryList.forEach((li,  index)=>{
    li.addEventListener('click',()=>{
        categoryList.forEach(item => item.classList.remove('active'));
        li.classList.add('active');

        swiperWraps.forEach(swiper =>{
            swiper.style.display='none';
        });

        const ids = ['items_wrap_best', 'items_wrap_face', 'items_wrap_eye', 'items_wrap_lip'];
        const targetId = ids[index];
        const targetSwiper = document.getElementById(targetId);

        if(targetSwiper){
            targetSwiper.style.display='block';
        }
    })
})