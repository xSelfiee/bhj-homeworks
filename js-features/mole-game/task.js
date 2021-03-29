let dead = document.getElementById("dead").textContent;
let lost = document.getElementById("lost").textContent;

for (let i=1; i<=9; i++) {
    let mole = document.getElementById(`hole${i}`);

    mole.onclick = function() {
        if(mole.className.includes('hole_has-mole')) {
            dead++;
        } else {
            lost++;   
        }

        if (dead === 10){
            alert('Победа!');
            dead = 0;
            lost = 0;
        }
        
        if (lost === 5){
            alert('Вы проиграли!');
            dead = 0;
            lost = 0;
        }

        document.getElementById("dead").textContent = dead;
        document.getElementById("lost").textContent = lost;
    }
}