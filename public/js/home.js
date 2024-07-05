// import { getAlldb } from "../../src/config/mongodb.js";
const addProj = document.querySelector('#add-project');
const popup = document.querySelector('.modal');
const popupClose = document.querySelector('.btn-close');
const cards = document.querySelectorAll('.card');

const projectDetails = (card)=>{
    // console.log(e);
    console.log(card.id);
    document.querySelector('body').style.backgroundColor = 'green';
    window.location.href = `/project/${card.id}`;
}

addProj.addEventListener(('click'), ()=>{
    if (popup.classList.contains('popup')) {
        popup.classList.remove('popup');
        // document.querySelector('body').style.overflow = 'auto';
    } else {
        popup.classList.add('popup');
        // document.querySelector('body').style.overflow = 'hidden';
    }
})

popupClose.addEventListener(('click'), ()=>{
    popup.classList.remove('popup');
    document.querySelector('body').style.overflow = 'auto';
})

cards.forEach((card)=>{
    card.addEventListener(('click'), ()=>{
        projectDetails(card);
    })
})