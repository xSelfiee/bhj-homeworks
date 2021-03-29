const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

let modalCloseArr = Array.from(document.getElementsByClassName('modal__close'));

for (let i = 0; i < modalCloseArr.length; i++) {
    modalCloseArr[i].onclick = function() {
        if (modalCloseArr[i].classList.contains('show-success')) {
            modalSuccess.classList.add('modal_active');
            modalMain.classList.remove('modal_active');
        } else {
            modalCloseArr[i].closest('.modal_active').className = 'modal';
        }
    }
}