const revealDivs = document.querySelectorAll('.reveal');
const viewportH = window.innerHeight;
window.addEventListener('scroll', () => {
    revealDivs.forEach(elem => {
        let topElem = elem.getBoundingClientRect().top;
        let botElem = elem.getBoundingClientRect().bottom;
        if(topElem < viewportH && topElem >=0 || botElem < viewportH && botElem >= 0){
            elem.classList.add('reveal_active');
        } else {
            elem.classList.remove('reveal_active');
        }
    })
});