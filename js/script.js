let btn = document.querySelector('.button');
let wrapper = document.querySelector('.wrapper');
let header = document.querySelector('.header');
let body = document.querySelector('body');

let persent = document.querySelectorAll('.skills__item-per');
let span = document.querySelectorAll('.skills__item-span');

btn.addEventListener('click',function() {
	wrapper.classList.toggle('move');
	header.classList.toggle('open');
	btn.classList.toggle('open');
	body.classList.toggle('lock');
})

persent.forEach((item,index) => {
	span[index].style.width = item.textContent;
})