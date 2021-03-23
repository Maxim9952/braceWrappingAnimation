window.addEventListener('DOMContentLoaded', () => {
'use strict';

let li = document.querySelectorAll('li'),
    hide = document.querySelector('.hide'),
    show = document.querySelectorAll('.show'),
    num = 0;

li.forEach((currentNum) => currentNum.addEventListener('mouseenter',
function() {
    for(let i = 0; i < li.length; i++) {
        if(this == li[i]) {
            num = i;
            break;
        }
    }
}));

li.forEach((showArr) => showArr.addEventListener('mouseenter', function() {
    if(num >= 1 && num < li.length - 1) {
        show[num].classList.add('active');
        show[num - 1].classList.add('active-2');
    } else if (num < 1) {
        show[num].classList.add('active');
        hide.classList.add('active-2');
    } else {
        show[num].style.cssText = 'border: 2px solid rgb(9, 102, 9);border-style: solid solid solid none';
        show[num].classList.add('active');
        show[num - 1].classList.add('active-2');
    }
}));

li.forEach((hideArr) => hideArr.addEventListener('mouseleave', function() {
    if(num >= 1 && num < li.length - 1) {
        show[num].classList.remove('active');
        show[num - 1].classList.remove('active-2');
    } else if (num < 1) {
        show[num].classList.remove('active');
        hide.style.cssText = 'border: 2px solid purple; border-style: none solid none none';
        hide.classList.remove('active-2');
        setTimeout(() => {
            hide.style.border = 'none';
        }, 550);
    } else {
        show[num - 1].classList.remove('active-2');
        show[num].style.cssText = 'border: 2px solid purple; border-style: none solid none none';
        show[num].classList.remove('active');
        setTimeout(() => {
            show[num].style.border = 'none';
        }, 550);
    }
}));
});