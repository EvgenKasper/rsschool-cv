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


console.log(`
Самооценка: 
1. Вёрстка валидная. "Document checking completed. No errors or warnings to show." +10 
2. Вёрстка семантическая (header,footer, main, nav, section, aside, fig h1-h5 ). +20
3. Для оформления СV используются css-стили. +10 
4. Контент в блоке,который горизонтально центрируется по центру. Фоновый цвет тянется во всю ширину страницы. +10 
5. Вёрстка адаптивная. +10
6. Есть адаптивное бургер-меню, плавная прокрутка по якорям. +10
7. На странице СV есть фото автора CV. Пропорции изображения не искажены, есть атрибут alt. +10
8. Kонтакты для связи и перечень навыков оформлены в виде списка ul > li. +10
9. CV содержит контакты, информацию о себе, навыках, образовании и уровне английского. +10
10. CV содержит пример кода.Подсветка кода при помощи highlight.js. +10
11. CV не содержит изображения-ссылки на выполненные проекты. 0
12. CV выполнено на английском языке. +10
13. Выполнены требования к Pull Request,  выполнена самооценка. +10
14. CV не содержит видеорезюме автора на английском языке.0
14. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV. +10

Итого: 140.
`);


