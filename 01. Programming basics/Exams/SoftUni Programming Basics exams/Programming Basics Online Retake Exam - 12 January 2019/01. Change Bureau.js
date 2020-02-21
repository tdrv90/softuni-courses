function changeBureau (arguments) {
    let bitcoins = Number(arguments.shift());
    let yuans = Number(arguments.shift());
    let comission = Number(arguments.shift());

    let bgn = (bitcoins * 1168) + (yuans * 0.264);
    bgn = bgn - (bgn * comission / 100);
    let eur = bgn / 1.95;

    console.log(eur.toFixed(2));
}
changeBureau([1, 5, 5]);
changeBureau([20, 5678, 2.4]);
changeBureau([7, 50200.12, 3]);


// 0.264