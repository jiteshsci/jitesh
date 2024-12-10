let links = document.querySelectorAll('.link');
let add = document.getElementById('add');
let addT = document.getElementById('addToggle');

links.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('pressed');
        element.addEventListener('animationend', () => {
            element.classList.remove('pressed');
        }, {once: true});
        console.log('Element clicked: ', element);
    });
});

addT.addEventListener('click', ()=>{
    if (addT.classList.contains('active')){
        addT.classList.remove('active');
        add.style.display = "none";
    }
    else{
        addT.classList.add('active');
        add.style.display = "flex";
    }
});