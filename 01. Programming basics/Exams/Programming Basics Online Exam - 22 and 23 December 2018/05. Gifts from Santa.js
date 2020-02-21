function santaGifts(arguments) {
    let numN = Number(arguments.shift());
    let numM = Number(arguments.shift());
    let numS = Number(arguments.shift());

    let addresses = "";

    for (let i = numM; i >= numN; i--) {
        if (i % 2 == 0 && i % 3 == 0) {
            if (i == numS) {
                break;
            } else {
                addresses += `${i} `;
            }
        }
    }
    console.log(addresses);

}

santaGifts([1, 30, 15])
santaGifts([1, 36, 12])
santaGifts([20, 1000, 36])