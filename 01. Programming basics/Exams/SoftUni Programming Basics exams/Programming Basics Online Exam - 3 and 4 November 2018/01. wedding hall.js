function weddingHall(arguments) {
    let length = Number(arguments.shift());
    let width = Number(arguments.shift());
    let barLength = Number(arguments.shift());

    let hallArea = length * width;
    let barArea = barLength * barLength;

    let dancing = hallArea * 0.19;

    let freeArea = hallArea - barArea - dancing;
    let numberOfGuests = freeArea / 3.2;

    console.log(Math.ceil(numberOfGuests));
}

weddingHall([50, 25, 2]);
weddingHall([70, 20, 4]);