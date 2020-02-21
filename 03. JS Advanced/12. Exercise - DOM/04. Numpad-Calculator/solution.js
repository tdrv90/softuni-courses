function solve() {
    const keys = document.querySelectorAll(".keys");
    const exprOutput = document.querySelector("#expressionOutput");
    const result = document.querySelector("#resultOutput");
    const clearBtn = document.querySelector(".clear");
    
    const calcMap = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    let operand = '';
    let firstNum = '';
    let secondNum = '';

    clearBtn.addEventListener('click', () => {
        exprOutput.textContent = '';
        result.textContent = '';
        firstNum = '';
        secondNum = '';
        operand = '';

    })

    Array.from(keys).map(x => x.addEventListener('click', function (e) {
        const selection = e.target.value;
        
        if (+selection || selection === '.' || selection === '0') {
            if (!operand) {
                firstNum += selection;
                exprOutput.textContent += selection;
            } else {
                secondNum += selection;
                exprOutput.textContent += selection;
            }
        } else if (calcMap.hasOwnProperty(selection)) {
            operand = selection;
            exprOutput.textContent += ` ${operand} `;
        } else if (selection === '=') {
            if (+firstNum && +secondNum) {
                result.textContent = calcMap[operand](+firstNum, +secondNum);
            } else {
                result.textContent = 'NaN';
            }
        }
    }))
}