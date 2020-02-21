function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');

    document.querySelector("#container > button").addEventListener('click', convert);

    function convert() {
        let num = Number(document.getElementById('input').value);
        let result;

        if (selectMenuTo.value === 'binary') {
            result = decimalToBinary(num);
        } else if (selectMenuTo.value === 'hexadecimal') {
            result = decimalToHexadecimal(num);
        }

        appendResult(result);
    }

    function createSelectMenuOptions() {
        let binaryOpt = document.createElement('option');
        binaryOpt.textContent = 'Binary';
        binaryOpt.value = 'binary';

        let hexadecimalOpt = document.createElement('option');
        hexadecimalOpt.textContent = 'Hexadecimal';
        hexadecimalOpt.value = 'hexadecimal';

        selectMenuTo.appendChild(binaryOpt);
        selectMenuTo.appendChild(hexadecimalOpt);
    }

    function appendResult(result) {
        document.getElementById('result').value = result;
    }

    function decimalToBinary(number) {
        return (number >>> 0).toString(2);
    }
    function decimalToHexadecimal(number) {
        return number.toString(16).toUpperCase();
    }

    createSelectMenuOptions();
}