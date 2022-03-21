const mainModal = document.querySelector('#modal_main');
const succesModal = mainModal.nextElementSibling;
const closeModal = document.querySelectorAll('.modal__close');

mainModal.classList.add('modal_active');

closeModal.forEach( function(elem) {
    elem.onclick = function (event) {
        if(mainModal.classList.contains('modal_active')){
            mainModal.classList.remove('modal_active');
        }
        if(succesModal.classList.contains('modal_active')){
            succesModal.classList.remove('modal_active');
            return false;
        }
        if(event.explicitOriginalTarget.classList.contains('btn')){
            succesModal.classList.add('modal_active');
            return false;
        }
    }
}

);