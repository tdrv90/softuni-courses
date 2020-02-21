function titles (arguments) {
    let age = Number(arguments.shift());
    let gender = arguments.shift().toLowerCase();

    if (age >= 16) {
        if (gender == "m") {
            console.log("Mr.")
        } else if (gender == "f") {
            console.log("Ms.");
        }
    } else {
        if (gender == "m") {
            console.log("Master")
        } else if (gender == "f") {
            console.log("Miss");
        }
    }
}

titles(["12", "f"]);
titles(["17", "m"]);
titles(["25", "f"]);
titles(["13.5", "m"]);