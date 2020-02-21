function spaceShip(arguments) {
    let length = Number(arguments.shift());
    let width = Number(arguments.shift());
    let height = Number(arguments.shift());
    let astronautHeight = Number(arguments.shift());

    let volume = length * width * height;
    let roomSpace = (astronautHeight + 0.40) * 2 * 2;

    let astronauts = Math.floor(volume / roomSpace);

    if (astronauts < 3) {
        console.log(`The spacecraft is too small.`);
    } else if (astronauts < 11) {
        console.log(`The spacecraft holds ${astronauts} astronauts.`);
    } else {
        console.log(`The spacecraft is too big.`);
    }
}

spaceShip([3.5, 4, 5, 1.70]);
spaceShip([4.5, 4.8, 5, 1.75]);