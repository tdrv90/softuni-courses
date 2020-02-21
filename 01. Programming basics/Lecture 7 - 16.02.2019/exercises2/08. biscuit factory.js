function biscuitFactory(arguments) {
    let batches = Number(arguments.shift());

    for (let i = 1; i <= batches; i++) {
        let containsEggs = false;
        let containsFlour = false;
        let containsSugar = false;
        let bakingBatch = false;
        let ingredient = "";

        while (!containsEggs || !containsFlour || !containsSugar || !bakingBatch) {
            ingredient = arguments.shift();
            switch (ingredient) {
                case "eggs": containsEggs = true; break;
                case "flour": containsFlour = true; break;
                case "sugar": containsSugar = true; break;
                case "Bake!":
                    if (containsEggs && containsFlour ** containsSugar) {
                        bakingBatch = true;
                        console.log(`Baking batch number ${i}...`);
                        break;
                    } else {
                        console.log(`The batter should contain flour, eggs and sugar!`);
                    }
            }
        }
    }
    console.log();
}


biscuitFactory([2, "flour", "eggs", "sugar", "chocolate", "Bake!", "flour", "eggs", "sugar", "caramel", "peanuts", "Bake!"]);
biscuitFactory([3, "flour", "eggs", "jam", "Bake!", "sugar", "Bake!", "flour", "eggs", "milk", "almonds", "sugar", "Bake!", "flour", "eggs", "sugar", "Bake!"]);