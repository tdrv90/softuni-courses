function converter(arguments) {
    let value = Number(arguments.shift());
    let entry = arguments.shift().toLowerCase();
    let exit = arguments.shift().toLowerCase();

    switch (entry) {
        case "mm":
            value /= 1000;
            break;
        case "cm":
            value /= 100;
            break;
    }

    switch (exit) {
        case "mm":
            value *= 1000;
            break;
        case "cm":
            value *= 100;
            break;
    }

    console.log(value.toFixed(3));
}

converter([12, 'mm', 'm']);
converter([150, 'm', 'cm']);
converter([45, 'cm', 'mm']);
converter([45, 'cm', 'm']);