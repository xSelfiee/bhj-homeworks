const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

cookie.onclick = function() {
    counter.textContent++; 
    if (counter.textContent % 2 == 0) {
        this.width = "200";
    } else {
        this.width = "300";
    }
} 