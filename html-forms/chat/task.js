function time() {
    let date = new Date();
    return addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
}


const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const inputForm = document.querySelector('.chat-widget__input');

chatWidget.addEventListener('click', function () {
    chatWidget.classList.add('chat-widget_active');
});

messages.insertAdjacentHTML('afterBegin', `
    <div class="message">
    <div class="message__time"></div>
    <div class="message__text">Добрый день!</div>
    </div>
    `);
document.querySelector('.message__time').textContent = time();

function randomPhrase() {
    const phrases = [
        'Опять ты?',
        'Когда ты уже угомонишься...',
        'Я сейчас не готов с тобой разговаривать.',
        'Всего доброго!'];
    const randomizer = Math.floor(Math.random() * phrases.length);
    let phrase = phrases[randomizer];
    return phrase;
};

document.querySelector('.chat-widget__input').addEventListener('keydown', function (e) {
    if ((e.keyCode === 13) && (this.value !== '')) {
    
    // User:
    messages.insertAdjacentHTML('afterBegin', `
    <div class="message message_client">
    <div class="message__time"></div>
    <div class="message__text"></div>
    </div>
    `);
    document.querySelector('.message__time').textContent = time();
    document.querySelector('.message__text').textContent = this.value;

    // BOT:
    messages.insertAdjacentHTML('afterBegin', `
    <div class="message">
    <div class="message__time"></div>
    <div class="message__text">Добрый день!</div>
    </div>
    `);
    document.querySelector('.message__time').textContent = time();
    document.querySelector('.message__text').textContent = randomPhrase();

    this.value = '';
  };
});