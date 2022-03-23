const buttonDropdown = document.querySelector('.dropdown__value');
const menuDropdown = document.querySelector('.dropdown__list');
const itemsDropdown = document.querySelectorAll('.dropdown__item')
buttonDropdown.onclick = (event)  => {
    menuDropdown.classList.toggle('dropdown__list_active');
}

itemsDropdown.forEach(elem => elem.children[0].onclick = (event) => {
    if(elem.children[0].classList.contains('dropdown__link')){
        buttonDropdown.textContent = elem.children[0].textContent;
        menuDropdown.classList.remove('dropdown__list_active');
        return false;
    }
});