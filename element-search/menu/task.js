const menuLinks = document.querySelectorAll('.menu_main');
menuLinks.forEach(function (elem) {
    elem.onclick = function (event) {
        if (event.target.nextElementSibling != null) {
            if(event.target.nextElementSibling.classList.contains('menu_sub')){
                let neighbor = event.target.nextElementSibling;
                if (neighbor.classList.contains('menu_active')) {
                    neighbor.classList.remove('menu_active');
                    return false;
                } else if (!neighbor.classList.contains('menu_active')) {
                    event.currentTarget.querySelectorAll('.menu_active').forEach(elem => elem.classList.remove('menu_active'))
                    neighbor.classList.add('menu_active')
                    return false;
                }
            }
        }

    }
})