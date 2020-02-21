function encodeAndDecodeMessages() {
    const inputTextArea = document.querySelector("#main > div:nth-child(1) > textarea");
    const outputTextArea = document.querySelector("#main > div:nth-child(2) > textarea");
    const encodeBtn = document.querySelector("#main > div:nth-child(1) > button");
    const decodeBtn = document.querySelector("#main > div:nth-child(2) > button");

    encodeBtn.addEventListener('click', encryptMsg);
    decodeBtn.addEventListener('click', decryptMsg);

    function encryptMsg() {
        let msgToEncrypt = inputTextArea.value;
        let encryptedMsg = msgToEncrypt.split('')
            .map((x) => x = String.fromCharCode(x.charCodeAt(0) + 1))
            .join('');
        outputTextArea.value = encryptedMsg;

        inputTextArea.value = '';
    }

    function decryptMsg() {
        let msgToDecrypt = outputTextArea.value;
        let decryptedMsg = msgToDecrypt.split('')
            .map((x) => String.fromCharCode(x.charCodeAt(0) - 1))
            .join('');

        outputTextArea.value = decryptedMsg;
    }
}