document.querySelectorAll('.interest__check').forEach((checkbox) => {
  checkbox.addEventListener('click', (event) => {
    let clickBox = event.currentTarget;    
    clickBox.closest('.interest').querySelectorAll('.interest__check').forEach((box) => {
        box.checked = clickBox.checked
    });
  });
});