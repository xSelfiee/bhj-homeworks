const rotator = document.querySelectorAll('.rotator__case');

setInterval(() => {
    let random = rotator[Math.floor(Math.random() * rotator.length)];
    random.style.color = random.dataset.color;
    rotator.forEach(e => e.classList.remove('rotator__case_active'));
    random.classList.toggle('rotator__case_active');
    //console.log(random);
}, 1000);