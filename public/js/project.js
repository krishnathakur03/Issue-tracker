const sLabel = document.getElementById('select-label');
const sAuthor = document.getElementById('select-author');

document.querySelector('#create-issue').addEventListener(('click'), ()=>{
    if (window.getComputedStyle(document.querySelector('.modal')).display == 'none') {
        document.querySelector('.modal').style.display = 'block';
    }
})

document.querySelector('.btn-close').addEventListener('click', ()=>{
    document.querySelector('.modal').style.display = 'none';
})

function redirectProj(id) {
    console.log(id);
    window.location.href = `/project/${id}`;
}

function labelFunc() {
    sLabel.style.display = 'flex';
    sAuthor.style.display = 'none';
}

function filterFunc() {
    sAuthor.style.display = 'block';
    sLabel.style.display = 'none';
}