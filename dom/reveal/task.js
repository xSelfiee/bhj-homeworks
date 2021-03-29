Array.from(document.querySelectorAll('.reveal')).forEach((item) => {
    window.addEventListener('scroll', () => {
        if ((item.getBoundingClientRect().bottom <= window.innerHeight) && (item.getBoundingClientRect().top >= 0)) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
   })
})