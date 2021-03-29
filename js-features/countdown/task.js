const time = document.getElementById("timer");

const interval = setInterval(function() {
    if (time.textContent > 0) {
        time.textContent -=1;
    } 
    else {
        clearInterval(count);
        alert("Вы победили в конкурсе!");
    }
}, 1000);