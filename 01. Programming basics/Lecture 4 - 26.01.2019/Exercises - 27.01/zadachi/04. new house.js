function homeFlowers(arguments) {
    let flowers = arguments.shift();
    let quantity = Number(arguments.shift());
    let budget = Number(arguments.shift());

    let price = 0;

    switch (flowers) {
        case "Roses":
            price = quantity * 5;
            if (quantity > 80) {
                price = price - (price * 0.10);
            }
            break;
        case "Dahlias":
            price = quantity * 3.80;
            if (quantity > 90) {
                price = price - (price * 0.15);
            }
            break;
        case "Tulips":
            price = quantity * 2.80;
            if (quantity > 80) {
                price = price - (price * 0.15);
            }
            break;
        case "Narcissus":
            price = quantity * 3;
            if (quantity < 120) {
                price = price * 1.15;
            }
            break;
        case "Gladiolus":
            price = quantity * 2.50;
            if (quantity < 80) {
                price = price * 1.20;
            }
            break;
    }

    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${(budget - price).toFixed(2)} leva left.`)
    }   else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
    }
}

// homeFlowers(["Roses", 55, 250]);
// homeFlowers(["Tulips", 88, 260]);
homeFlowers(["Narcissus", 119, 360]);