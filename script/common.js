const htop = document.querySelector('.h_top');
const closeBtn = document.querySelector('.h_top #close_btn');
closeBtn.addEventListener('click',()=>{
    htop.style.display = 'none';
});

const subTab = document.querySelector('header .sub_tab');
const moreTab = document.querySelector('.header_right .more_tab');
subTab.parentElement.addEventListener('mouseover',()=>{
    subTab.style.display='block';
});
subTab.addEventListener('mouseout',()=>{
    subTab.style.display='none';
});

subTab.parentElement.addEventListener('click',()=>{
});

moreTab.addEventListener('mouseover', ()=>{
    subTab.style.display = 'block';
});
subTab.addEventListener('mouseout',()=>{
    subTab.style.display = 'none';
})
const searchPopup = document.querySelector('header .search_popup');
const searchIcon = document.querySelector('.header_right .search');
const searchClose = document.querySelector('.search_popup #close_btn');
searchIcon.addEventListener('click',()=>{
    searchPopup.style.display = 'block';
})
searchClose.addEventListener('click',()=>{
    searchPopup.style.display='none';
})