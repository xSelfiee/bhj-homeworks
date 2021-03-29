const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const slides = document.getElementsByClassName('slider__item');
let i = 0;

next.onclick = function() { 
    i++;
    if (i >= slides.length) {
        slides[i-1].classList.remove("slider__item_active");
        i = 0;
        slides[i].classList.add("slider__item_active");
    } else {
        slides[i-1].classList.remove("slider__item_active");
        slides[i].classList.add("slider__item_active");
    }
}

prev.onclick = function() {
    if (i <= 0) {
        slides[i].classList.remove("slider__item_active");
        i = slides.length;
        slides[i-1].classList.add("slider__item_active");
    }  else { 
         slides[i].classList.remove("slider__item_active");
         slides[i-1].classList.add("slider__item_active");
     }
    i--;
}