function solve() {
    let inputField = document.querySelector("#chat_input");
    let chat = document.querySelector("#chat_messages");
    let sendBtn = document.querySelector("#send");

    sendBtn.addEventListener('click', () => {
        createMessage();
    })

    function createMessage() {
        let msg = inputField.value;
        let myMsg = document.createElement('div');
        myMsg.classList = 'message my-message';
        myMsg.textContent = msg;
        chat.appendChild(myMsg);
        inputField.value = '';
    }
}