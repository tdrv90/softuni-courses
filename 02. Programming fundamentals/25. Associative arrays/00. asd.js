function findElement(arr, func) {
    for (let el of arr) {
        if (func(el)) {
            return el;
        }
    }
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));



//   findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.