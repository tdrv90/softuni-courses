function demo(arguments) {
    let num = arguments.shift();
    let sum = 0;
    for (let i = 0; i <= num.length; i++) {
        sum += Number(num.charAt(i));
    }

    console.log(sum);
}


demo(["123"]);
demo(["432943928498324"]);