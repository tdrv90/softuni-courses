function danceHall (arguments) {
    // Entry date
    let hallLength = Number(arguments.shift());
    let hallWidth = Number(arguments.shift());
    let wardrobeSide = Number(arguments.shift());

    // Calculations
    let hallArea = hallLength * hallWidth;
    let benchArea = hallArea / 10;
    let wardrobeArea = wardrobeSide * wardrobeSide;

    let freeArea = hallArea - benchArea - wardrobeArea;
    let dancers = freeArea / 0.704;

    // Output data
    console.log(Math.floor(dancers));
}

danceHall([50, 25, 2]);

