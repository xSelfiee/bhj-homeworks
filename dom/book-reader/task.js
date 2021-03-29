const book = document.getElementById('book');

const button = document.querySelectorAll('.font-size');
button[0].dataset.size = 'book_fs-small';
button[1].dataset.size;
button[2].dataset.size = 'book_fs-big';

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (e) {
    e.preventDefault();
    button.forEach(e => e.classList.remove('font-size_active'));
    button[i].classList.add('font-size_active');
    book.classList = 'book';
    book.classList.toggle(button[i].dataset.size);
    return false;
  });
};