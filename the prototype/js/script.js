const menu = document.querySelector('#mobile-menu');
const nav= document.querySelector('#navbar');


    menu.addEventListener('click',()=>{
        nav.classList.toggle('active');
    })
