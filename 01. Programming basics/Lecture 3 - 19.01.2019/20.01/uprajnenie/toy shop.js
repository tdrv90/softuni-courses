function toyShop (arguments) {
    let holidayPrice = Number(arguments.shift());
    let puzzle = Number(arguments.shift());
    let dolls = Number(arguments.shift());
    let bears = Number(arguments.shift());
    let minions = Number(arguments.shift());
    let trucks = Number(arguments.shift());

    let sum = (puzzle * 2.60) + (dolls * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
    let totalCount = puzzle + dolls + bears + minions + trucks;
    let discount = 0;

    if (totalCount >= 50) {
        discount = sum * 0.25;
    }

    let sumAfterDiscount = sum - discount;
    let sumAfterRent = (sumAfterDiscount - (sumAfterDiscount * 0.10));
    let difference = Math.abs(sumAfterRent - holidayPrice);
    
    if (sumAfterRent >= holidayPrice) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else if (holidayPrice > sumAfterRent) {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }

}

toyShop([40.80, 20, 25, 30, 50, 10]);
toyShop([320, 8, 2, 5, 5, 1]);