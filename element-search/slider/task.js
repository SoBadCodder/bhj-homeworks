let currentItem = document.querySelector('.slider__item_active');
const lastItem = document.querySelector('.slider__items').children[document.querySelector('.slider__items').children.length - 1];
const navSlider = document.querySelectorAll('.slider__arrow');
navSlider.forEach(function (elem) {
    elem.onclick = function (event) {
        if (elem.classList.contains('slider__arrow_prev')) {
            slideLeft();
        }
        if (elem.classList.contains('slider__arrow_next')) {
            if (currentItem.classList.contains('slider__item_active')) {
                slideRight();
            }
        }
    }
});

function slideRight() {
    if(currentItem.nextElementSibling === null){
        currentItem.classList.remove('slider__item_active');
        currentItem = document.querySelector('.slider__item');
        currentItem.classList.add('slider__item_active');
    } else{
        currentItem.classList.remove('slider__item_active');
        currentItem = currentItem.nextElementSibling;
        currentItem.classList.add('slider__item_active');
    }
}
function slideLeft() {
    if(currentItem.previousElementSibling === null){
        currentItem.classList.remove('slider__item_active');
        currentItem = lastItem;
        currentItem.classList.add('slider__item_active');
    } else{
        currentItem.classList.remove('slider__item_active');
        currentItem = currentItem.previousElementSibling;
        currentItem.classList.add('slider__item_active');
    }
}