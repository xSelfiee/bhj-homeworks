const hasTooltip = document.querySelectorAll('.has-tooltip');

for (let el of hasTooltip) {
  let element = document.createElement("div");

  element.classList.add("tooltip");
  element.innerText = el.title;    
  element.style.left = `${el.getBoundingClientRect().left}px`;
  element.style.top = `${el.getBoundingClientRect().bottom}px`;
  element.style.position = "absolute";
   
  el.insertAdjacentElement('beforeend', element);
}


hasTooltip.forEach((text) => {
  text.onclick = () => {
        
    for(let elem of document.querySelectorAll(".tooltip")) {

      if(text.firstElementChild.classList.contains("tooltip_active")) {
          continue;
      }
      
      if (elem.classList.contains("tooltip_active")) {
          elem.classList.remove("tooltip_active");
      }
    };
    text.firstElementChild.classList.toggle("tooltip_active");

    return false;
  }
});
