

const swiper = new Swiper('#best_items_wrap',{
    slidesPerView: '4',
    slidePerGroup:1,
    spaceBetween:29,
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