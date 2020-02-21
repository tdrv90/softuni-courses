function excellent (arguments) {
    let score = Number(arguments.shift());

    if (score >= 5.50) {
        console.log("Excellent!");
    }
}

excellent([5.50]);
excellent([5.49]);