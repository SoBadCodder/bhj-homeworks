const tabsNav = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');
let currentTab = document.querySelector('.tab_active');

for (let i = 0; i < tabsNav.length; i++){
    tabsNav[i].addEventListener('click', (event) => {
        if(!event.target.classList.contains('tab_active') && event.target.classList.contains('tab')){
            tabsNav.forEach(elem => {
                elem.classList.remove('tab_active');
            });
            tabsContent.forEach(elem => {
                elem.classList.remove('tab__content_active');
            });
            tabsNav[i].classList.add('tab_active');
            tabsContent[i].classList.add('tab__content_active');
        }
    });
}