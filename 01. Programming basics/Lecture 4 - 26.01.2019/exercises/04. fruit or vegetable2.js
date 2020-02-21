function fruitOrVegetable(arguments) {
    let product = arguments.shift().toLowerCase();

    if (product == "banana" || product == "apple" || product == "kiwi" || product == "cherry" || product == "lemon" || product == "grapes") {
        console.log("fruit");
    } else if ( product == "tomato" || product == "cucumber" || product == "pepper" || product == "carrot") {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}

fruitOrVegetable(["banana"]);
fruitOrVegetable(["apple"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["water"]);

// • Плодовете "fruit" имат следните възможни стойности:  banana, apple, kiwi, cherry, lemon и grapes
// • Зеленчуците "vegetable" имат следните възможни стойности:  tomato, cucumber, pepper и carrot
// • Всички останали са "unknown