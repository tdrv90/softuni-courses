// function addAndSubtract(firstNum, secondNum, thirdNum) {
//     let result;
//     function add(a, b) {
//         result = a + b;

//         return result;
//     }

//     function subtract(c, d) {
//         result = c - d;
//     }

//     add(firstNum, secondNum);
//     subtract(result, thirdNum);
//     console.log(result);
// }

// addAndSubtract(23, 6, 10);
// addAndSubtract(1, 17, 30);


function anotherAddAndSubtract(firstNum, secondNum, thirdNum) {
    let result;

    let add = (a, b) => {
        result = a + b;
    }

    let subtract = (c, d) => {
        result = c - d;
    }

    add(firstNum, secondNum);
    subtract(result, thirdNum);

    return result;
}

console.log(anotherAddAndSubtract(23, 6, 10));
console.log(anotherAddAndSubtract(1, 17, 30));