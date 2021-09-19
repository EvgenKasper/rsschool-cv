let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.header-menu');
let body = document.querySelector('.pagebody');
let link = document.querySelector('.header-list')

burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})
link.addEventListener('click',()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})
