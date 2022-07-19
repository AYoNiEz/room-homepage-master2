const open_Menu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-wrapper");
const close = document.querySelector(".close");




open_Menu.addEventListener('click', clickOpen);

close.addEventListener('click', clickClose);

function clickOpen(event){
    navMenu.classList.add('active');
   
}

function clickClose(event){
   
    navMenu.classList.remove('active');
    
}

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let index = 0;
display(index);
function display (index) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
	});
	slides[index].style.display = 'flex';
}

function nextSlide () {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}
function prevSlide () {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
