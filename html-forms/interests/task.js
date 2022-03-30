const checkboxes = document.querySelectorAll('.interest__check');

checkboxes.forEach((elem) => {
    elem.onclick = (event) => {
            let clickedCheckbox = event.currentTarget;
            let childCheckbox = clickedCheckbox.closest('.interest').querySelectorAll('.interest__check');
            childCheckbox.forEach((elem) => elem.checked = clickedCheckbox.checked);
    }
});
