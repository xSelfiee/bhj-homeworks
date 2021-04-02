const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip[0].insertAdjacentHTML('beforeend', '<div class="tooltip" style="left: 0; top: 0"></div>');
let tooltip = document.querySelector('.tooltip');

hasTooltip.forEach((text) => {
  text.addEventListener('click', (event) => {
    event.preventDefault();
        
    if (tooltip.classList.contains('tooltip_active')) {

      tooltip.classList.remove('tooltip_active');

    } 

    tooltip.classList.add('tooltip_active');
    tooltip.textContent = event.currentTarget.getAttribute('title');;
    tooltip.style.left = event.currentTarget.offsetLeft + 0 + "px";
    tooltip.style.top = event.currentTarget.offsetTop + 20 + "px";

  });
});
