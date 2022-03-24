const fontSizes = document.querySelectorAll('.font-size');
const bookDiv = document.querySelector('.book');
fontSizes.forEach(elem => {
    elem.onclick = (event) => {
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        elem.classList.add('font-size_active');
        if(elem.classList.contains('font-size_small')){
            bookDiv.className = ('book book_fs-small');
        } else if (elem.classList.contains('font-size_big')){
            bookDiv.className = ('book book_fs-big');
        } else {
            bookDiv.className = ('book');
        }
        return false;
    }
});