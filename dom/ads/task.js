let currentAd = document.querySelector('.rotator__case_active');

setInterval(() => {
    currentAd.classList.remove('rotator__case_active');
    if (currentAd.nextElementSibling != null) {
        
        currentAd = currentAd.nextElementSibling;
    } else {
        currentAd = document.querySelector('.rotator').firstElementChild;
    }
    currentAd.classList.add('rotator__case_active');
}, 1000);