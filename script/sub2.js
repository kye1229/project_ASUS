const thumSwiper = new Swiper('.thum_swiper',{
    direction:'vertical',
    navigation
});
console.log(thumSwiper);


const selectLink1 = document.querySelectorAll('.storage a');
const selectLink2 = document.querySelectorAll('.memory a');
const selectLink3 = document.querySelectorAll('.processor a');
const selectLink4 = document.querySelectorAll('.graphic a');
const selectLink5 = document.querySelectorAll('.color a');
console.log(selectLink1, selectLink2, selectLink3, selectLink4, selectLink5);

function removeClass1(){
    selectLink1[0].classList.remove('active');
    selectLink1[1].classList.remove('active');
    selectLink1[2].classList.remove('active');
}
function removeClass2(){
    selectLink2[0].classList.remove('active');
    selectLink2[1].classList.remove('active');
}
function removeClass3(){
    selectLink3[0].classList.remove('active');
    selectLink3[1].classList.remove('active');
}
function removeClass4(){
    selectLink4[0].classList.remove('active');
    selectLink4[1].classList.remove('active');
}
function removeClass5(){
    selectLink5[0].classList.remove('active');
    selectLink5[1].classList.remove('active');
}

selectLink1[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass1();
    selectLink1[0].classList.add('active');
})
selectLink1[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass1();
    selectLink1[1].classList.add('active');
})
selectLink1[2].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass1();
    selectLink1[2].classList.add('active');
})

selectLink2[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass2();
    selectLink2[0].classList.add('active');
})
selectLink2[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass2();
    selectLink2[1].classList.add('active');
})

selectLink3[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass3();
    selectLink3[0].classList.add('active');
})
selectLink3[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass3();
    selectLink3[1].classList.add('active');
})

selectLink4[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass4();
    selectLink4[0].classList.add('active');
})
selectLink4[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass4();
    selectLink4[1].classList.add('active');
})
selectLink5[0].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass5();
    selectLink5[0].classList.add('active');
})
selectLink5[1].addEventListener('click',(e)=>{
    e.preventDefault();
    removeClass5();
    selectLink5[1].classList.add('active');
})


const cartBtn = document.querySelector('.inform_wrap #cart_btn');
const buyBtn = document.querySelector('.inform_wrap #buy_btn');
console.log(cartBtn, buyBtn);
cartBtn.addEventListener('click',()=>{
    alert('장바구니에 추가되었습니다.');
});
buyBtn.addEventListener('click',()=>{
    confirm('구매하시겠습니까?');
})