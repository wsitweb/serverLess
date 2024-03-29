const DOMelementsCodeTextLi = document.querySelectorAll('.code-text__list>li');
function enumeration(elements, actions){
    if(actions == 'data-num'){
        let num = 0;
        for(let elem of elements){
            num++;
            elem.dataset.num = num;
        }
    }
}
enumeration(DOMelementsCodeTextLi, 'data-num');

const DOMelementHeader = document.querySelector('header');
let switchScroll = 0;
document.addEventListener('scroll', ()=>{switchClassHeader(100)});
function switchClassHeader(position){
    if(Math.round(window.scrollY) > position){
        DOMelementHeader.classList.add('hover')
        switchScroll++;
    }else if(Math.round(window.scrollY) < position || switchScroll){
        DOMelementHeader.classList.remove('hover')
        switchScroll--;
    }
}

const DOMelementButton = document.querySelector('.header__button');
DOMelementButton.addEventListener('click', () => {
    DOMelementHeader.classList.toggle('active')
})