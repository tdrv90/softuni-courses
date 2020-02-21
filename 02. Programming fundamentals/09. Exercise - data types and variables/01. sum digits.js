function sumDigits(num) {
    let number = String(num);
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    return sum;
    // console.log(sum);
}

console.log(sumDigits(245678));


// sumDigits(245678)