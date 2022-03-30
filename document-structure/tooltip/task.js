const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach((elem) => {
    elem.insertAdjacentHTML("afterend",
        `<div class="tooltip" style="">
        ${elem.getAttribute("title")}
        </div>
    `);
    elem.onclick = (event) => {
        const tooltips = document.querySelectorAll('.tooltip');
        const tooltipPos = event.target.getBoundingClientRect();
        tooltips.forEach((tooltip) => {
            if(tooltip != elem.nextElementSibling){
                tooltip.classList.remove('tooltip_active')
            } else {
                elem.nextElementSibling.classList.toggle('tooltip_active');
                tooltip.style.position = "absolyte";
                tooltip.style.top = tooltipPos.bottom + "px";
                tooltip.style.left = tooltipPos.left + "px";
            }
        });
        event.preventDefault();
    }
});