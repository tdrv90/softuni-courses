function factorialDivision(firstNum, secondNum) {
    function factorialize(num) {
        let result = num;
        if (num === 0 || num === 1)
            return 1;
        while (num > 1) {
            num--;
            result *= num;
        }
        return result;
    }
    return Number((factorialize(firstNum) / factorialize(secondNum))).toFixed(2);
}

console.log(factorialDivision(5, 2));
