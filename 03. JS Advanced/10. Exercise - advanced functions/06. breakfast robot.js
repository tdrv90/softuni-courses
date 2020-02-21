let robot = (function () {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function restock([el, qty]) {
        qty = +qty;
        ingredients[el] += qty;
        return "Success";
    }

    function prepare([recipe, qty]) {
        qty = +qty;
        let msg = "";

        if (recipe === "apple") {
            if (ingredients.flavour < qty * 2) {
                msg = "Error: not enough flavour in stock";
            }
            if (ingredients.carbohydrate < qty) {
                msg = "Error: not enough carbohydrate in stock";
            }

            if (msg === "") {
                ingredients.flavour -= qty * 2;
                ingredients.carbohydrate -= qty;
                return "Success";
            }
            return msg;
        } else if (recipe === "lemonade") {
            if (ingredients.flavour < qty * 20) {
                msg = "Error: not enough flavour in stock";
            }
            if (ingredients.carbohydrate < qty * 10) {
                msg = "Error: not enough carbohydrate in stock";
            }
            if (msg === "") {
                ingredients.flavour -= qty * 20;
                ingredients.carbohydrate -= qty * 10;
                return "Success";
            }
            return msg;
        } else if (recipe === "burger") {
            if (ingredients.flavour < qty * 3) {
                msg = "Error: not enough flavour in stock";
            }
            if (ingredients.fat < qty * 7) {
                msg = "Error: not enough fat in stock";
            }
            if (ingredients.carbohydrate < qty * 5) {
                msg = "Error: not enough carbohydrate in stock";
            }
            if (msg === "") {
                ingredients.flavour -= qty * 3;
                ingredients.fat -= qty * 7;
                ingredients.carbohydrate -= qty * 5;
                return "Success";
            }
            return msg;
        } else if (recipe === "eggs") {
            if (ingredients.flavour < qty) {
                msg = "Error: not enough flavour in stock";
            }
            if (ingredients.fat < qty) {
                msg = "Error: not enough fat in stock";
            }
            if (ingredients.protein < qty * 5) {
                msg = "Error: not enough protein in stock";
            }
            if (msg === "") {
                ingredients.flavour -= qty;
                ingredients.fat -= qty;
                ingredients.protein -= qty * 5;
                return "Success";
            }
            return msg;
        } else if (recipe === "turkey") {
            if (ingredients.flavour < qty * 10) {
                msg = "Error: not enough flavour in stock";
            }
            if (ingredients.fat < qty * 10) {
                msg = "Error: not enough fat in stock";
            }
            if (ingredients.carbohydrate < qty * 10) {
                msg = "Error: not enough carbohydrate in stock";
            }
            if (ingredients.protein < qty * 10) {
                msg = "Error: not enough protein in stock";
            }
            if (msg === "") {
                ingredients.flavour -= qty * 10;
                ingredients.fat -= qty * 10;
                ingredients.carbohydrate -= qty * 10;
                ingredients.protein -= qty * 10;
                return "Success";
            }
            return msg;
        }
    }

    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }

    return function (cmd) {
        let tokens = cmd.split(' ');
        let action = tokens.shift();

        if (action === "prepare") {
            return prepare(tokens);
        } else if (action === "restock") {
            return restock(tokens);
        } else if (action === "report") {
            return report();
        }
    }
})();


console.log(robot("restock carbohydrate 10")); // Success
console.log(robot("restock flavour 10")); // Success
console.log(robot("prepare apple 1")); // Success
console.log(robot("restock fat 10")); // Success
console.log(robot("prepare burger 1")); // Success
console.log(robot("report")); // protein=0 carbohydrate=4 fat=3 flavour=5