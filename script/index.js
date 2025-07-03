

const swiper = new Swiper('#best_items_wrap',{
    slidesPerView: 4,
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
    },
})