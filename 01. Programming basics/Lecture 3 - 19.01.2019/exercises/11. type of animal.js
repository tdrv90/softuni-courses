function typeOfAnimal(arguments) {
    let animal = arguments.shift();

    switch (animal) {
        case "dog":
            console.log("mammal");
            break;

        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
    }
}

typeOfAnimal(["dog"]);
typeOfAnimal(["snake"]);
typeOfAnimal(["doge"]);