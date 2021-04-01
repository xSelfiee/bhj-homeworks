let control = document.querySelector('.tasks__control');
let input = document.querySelector('.tasks__input')
let list = document.querySelector('.tasks__list');

control.addEventListener('submit', function (event) {
    event.preventDefault();

    if (input.value !== '') {
        list.insertAdjacentHTML('beforeEnd', '<div class="task"><div class="task__title">Сходить в магазин</div><a href="#" class="task__remove">&times;</a></div>');
        let task = document.querySelectorAll('.task__title');
        task[task.length - 1].textContent = input.value;

        let remove = document.querySelectorAll('.task__remove');
        remove[remove.length - 1].addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove()
        });

        input.value = '';

    } else if (input.value == '') {
        alert('Сперва заполните поле ввода!');
    };
});