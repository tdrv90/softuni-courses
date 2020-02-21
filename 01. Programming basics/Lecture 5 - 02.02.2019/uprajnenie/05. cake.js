function cakePieces(arguments) {
    let cakeLength = Number(arguments.shift());
    let cakeWidth = Number(arguments.shift());

    let totalCakePieces = cakeLength * cakeWidth;
    let cakeEatenPieces = 0;
    let diff = 0;

    let command = arguments.shift();

    while (command != "STOP") {
        let pieces = Number(command);
        cakeEatenPieces += pieces;
        diff = Math.abs(cakeEatenPieces - totalCakePieces);

        if (cakeEatenPieces > totalCakePieces) {
            console.log(`No more cake left! You need ${diff} pieces more.`);
            break;
        }
        command = arguments.shift();
    }

    if (command == "STOP") {
        console.log(`${diff} pieces are left.`);
    }
}

cakePieces([10, 10, 20, 20, 20, 20, 21]);