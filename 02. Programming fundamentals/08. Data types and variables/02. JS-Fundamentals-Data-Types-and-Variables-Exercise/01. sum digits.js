function sumDigits(number) {
    let num = number.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num.charAt(i));
    }
    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);