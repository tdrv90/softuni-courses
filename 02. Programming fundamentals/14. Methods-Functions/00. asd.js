// // Function Hoisting:
// printNumbers()

// function printNumbers() {
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }

// // Function Expression: 
// let secondPrint = function () {
//     console.log('Hello!');
// }

// secondPrint();


// Arrow functions: 
// let thirdPow = (num, base) => {
//     return num ** base;
// }

// console.log(thirdPow(2, 5));


let arr = [1, 2, 3, 4, 5]
arr[0]
arr[0] = 1;

let convertedArr = arr.map((num) => num * 2);

console.log(convertedArr);