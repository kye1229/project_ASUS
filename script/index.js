const bnrSlide = new Swiper('.bnr_swiper .bnr_wrap',{
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    loop:true,
    speed:1000,
    pagination:{
        el:'.bnr_wrap + .swiper-pagination',
        type:'bullets',
        dynamicBullets:true,
    },
    navigation:{
        nextEl:'.bnr_swiper .next',
        prevEl:'.bnr_swiper .prev',
    },
});

const newNum = document.querySelector('.new_wrap .now_page');
const newNow = document.querySelectorAll('.new_wrap .swiper-slide');
const newTotalNum = document.querySelector('.new_wrap .total_page');
newTotalNum.innerText = newNow.length;
const newSlide = new Swiper('.new_wrap .new_swiper',{
    speed:1000,
    navigation:{
        prevEl:'.new_wrap .prev',
        nextEl:'.new_wrap .next',
    },
    on:{
        slideChange:function(){
            newNum.textContent = this.realIndex+1;
        }
    },
});
const dealNum = document.querySelector('.hot_deal_wrap .deal_page');
const dealNow = document.querySelectorAll('.hot_deal_wrap .swiper-slide');
const dealTotalNum = document.querySelector('.hot_deal_wrap .total_page');
dealTotalNum.innerText = dealNow.length;
const dealSlide = new Swiper('.hot_deal_wrap .deal_swiper',{
    speed:1000,
    navigation:{
        prevEl:'.hot_deal_wrap .prev',
        nextEl:'.hot_deal_wrap .next',
    },
    on:{
        slideChange:function(){
            dealNum.textContent = this.realIndex+1;
        }
    },
});
