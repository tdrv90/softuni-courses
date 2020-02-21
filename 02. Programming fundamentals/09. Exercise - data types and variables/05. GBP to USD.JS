function gbpToUsd(gbp) {
    let usd = (gbp * 1.31).toFixed(3);

    return usd;
}

console.log(gbpToUsd(80));
console.log(gbpToUsd(39));