const notebookTab = document.querySelectorAll('.category_list a');
function tabRemove(){
    notebookTab[0].classList.remove('active');
    notebookTab[1].classList.remove('active');
    notebookTab[2].classList.remove('active');
    notebookTab[3].classList.remove('active');
    notebookTab[4].classList.remove('active');
    notebookTab[5].classList.remove('active');
    notebookTab[6].classList.remove('active');
};
notebookTab[0].addEventListener('click',(e)=>{
    e.preventDefault();
    tabRemove();
    notebookTab[0].classList.add('active');
})
notebookTab[1].addEventListener('click',(e)=>{
    e.preventDefault();
    tabRemove();
    notebookTab[1].classList.add('active');
})
notebookTab[2].addEventListener('click',(e)=>{
    e.preventDefault();
    tabRemove();
    notebookTab[2].classList.add('active');
})
notebookTab[3].addEventListener('click',(e)=>{
    e.preventDefault();
    tabRemove();
    notebookTab[3].classList.add('active');
})
notebookTab[4].addEventListener('click',(e)=>{
    e.preventDefault();
    tabRemove();
    notebookTab[4].classList.add('active');
})
notebookTab[5].addEventListener('click',(e)=>{
    e.preventDefault();
    tabRemove();
    notebookTab[5].classList.add('active');
})
notebookTab[6].addEventListener('click',(e)=>{
    e.preventDefault();
    tabRemove();
    notebookTab[6].classList.add('active');
})

const pageNum = document.querySelectorAll('.page_list a');
function numRemove(){
    pageNum[0].classList.remove('active');
    pageNum[1].classList.remove('active');
    pageNum[2].classList.remove('active');
}
pageNum[0].addEventListener('click',(e)=>{
    e.preventDefault();
    numRemove();
    pageNum[0].classList.add('active');
})
pageNum[1].addEventListener('click',(e)=>{
    e.preventDefault();
    numRemove();
    pageNum[1].classList.add('active');
})
pageNum[2].addEventListener('click',(e)=>{
    e.preventDefault();
    numRemove();
    pageNum[2].classList.add('active');
})