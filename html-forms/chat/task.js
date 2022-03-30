const windowChat = document.querySelector('.chat-widget');
const messagesChat = document.querySelector('.chat-widget__messages');
const inputChat = document.querySelector('.chat-widget__input');

windowChat.onclick = () => {
    if (!windowChat.classList.contains('chat-widget_active')) {
        windowChat.classList.add('chat-widget_active');
    }
}

inputChat.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 && inputChat.value != '') {
        messagesChat.innerHTML += `
        Сообщение от клиента
        <div class="message message_client">
            <div class="message__time">${getCurrentTime()}</div>
            <div class="message__text">
            ${inputChat.value}
            </div>
        </div>
        `;
        inputChat.value = '';
        setTimeout(() => {
        messagesChat.innerHTML += `
        Сообщение от робота
            <div class="message">
                <div class="message__time">${getCurrentTime()}</div>
                <div class="message__text">
                ${answerRobotMessage()}    
                </div>
            </div>`;
    }, 1000);
    }
    
});

function getCurrentTime() {
    if (new Date().getMinutes() < 10)
        return new Date().getHours() + ":0" + new Date().getMinutes();
    else
        return new Date().getHours() + ":" + new Date().getMinutes();
}

function answerRobotMessage() {
    const answerRobot = [
        "Ой, да ладно, не начинайте!",
        "Ты куда пишешь?",
        "Тут Вам не здесь!",
        "Всегда, я ваще, а чё?",
        "Мы Вас по IP вычислим!",
        "Не знаю, я всего лишь робот",
        "Связать вас с кожаным мешком?",
        "Вы все еще здесь?!",
        "Мы ещё не проснулись. Позвоните через 10 лет"
    ];
    return answerRobot[Math.floor(Math.random() * answerRobot.length)];
}