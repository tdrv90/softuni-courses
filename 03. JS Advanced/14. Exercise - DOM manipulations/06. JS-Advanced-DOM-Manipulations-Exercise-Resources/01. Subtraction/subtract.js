function subtract() {
    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondNum = Number(document.getElementById('secondNumber').value);
    const result = document.getElementById('result');

    return result.textContent = firstNum - secondNum;
}