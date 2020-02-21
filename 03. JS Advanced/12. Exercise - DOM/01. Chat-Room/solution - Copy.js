function solve() {
    const sendBtn = document.getElementById('send');
    const msgContainer = document.getElementById('chat_input');

    sendBtn.addEventListener('click', sendMessage);

    function sendMessage() {
        let msg = msgContainer.value;
        let newMsg = document.createElement('div');
        newMsg.classList.add('message', 'my-message');
        newMsg.textContent = msg;

        document.getElementById('chat_messages').appendChild(newMsg);

        msgContainer.value = "";
    }
}