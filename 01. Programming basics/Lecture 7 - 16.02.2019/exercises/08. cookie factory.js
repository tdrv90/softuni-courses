function bakingFactory(arguments) {
    let batches = Number(arguments.shift());

    for (let i = 1; i <= batches; i++) {
        let containFlour = false;
        let containEggs = false;
        let containSugar = false;
        let isBake = false;
        let command = "";

        while (!isBake) {
            command = arguments.shift();
            switch (command) {
                case "flour": containFlour = true; break;
                case "eggs": containEggs = true; break;
                case "sugar": containSugar = true; break;
                case "Bake!":
                    if (containFlour && containEggs && containSugar) {
                        isBake = true;
                        console.log(`Baking batch number ${i}...`);
                        break;
                    } else {
                        console.log(`The batter should contain flour, eggs and sugar!`);
                    } break;
            }
        }
    }

}

// bakingFactory([2, "flour", "eggs", "sugar", "chocolate", "Bake!", "flour", "eggs", "sugar", "caramel", "peanuts", "Bake!"]);
bakingFactory([3, "flour", "eggs", "jam", "Bake!", "sugar", "Bake!", "flour", "eggs", "milk", "almonds", "sugar", "Bake!", "flour", "eggs", "sugar", "Bake!"]);