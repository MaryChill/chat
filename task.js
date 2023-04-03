const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const chatWidgetMessages = document.getElementById('chat-widget__messages');

chatWidgetInput.required = 'true';

chatWidget.onclick = () => chatWidget.classList.add('chat-widget_active');
let robotMessages = ['Отстань','Нет','Не пиши сюда больше','Я с тобой не разговариваю','.'];

chatWidgetInput.addEventListener('keydown', key => {
    if (key.keyCode === 13) {
        let message = chatWidgetInput.value;
        if (chatWidgetInput.checkValidity()) {
            let time = new Date().toLocaleTimeString();
            let answer = Math.floor(Math.random() * robotMessages.length);
            chatWidgetMessages.innerHTML += 
            `<div class="message message_client">
                <div class="message__time">${time}</div>
                <div class="message__text">${message}</div>
            </div>`;
            chatWidgetInput.value = '';
            chatWidgetMessages.innerHTML += `
            <div class="message ">
                <div class="message__time">${time}</div>
                <div class="message__text">${robotMessages[answer]}</div>
            </div>`;
            
        }
    }   
})