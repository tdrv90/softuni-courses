function spaceShip(arguments) {
    let width = Number(arguments.shift());
    let length = Number(arguments.shift());
    let height = Number(arguments.shift());
    let avgHeightAstronauts = Number(arguments.shift());

    let spaceShipVolume = width * length * height;
    let astronautRoomVolume = (avgHeightAstronauts + 0.40) * 2 * 2;

    let rooms = Math.floor(spaceShipVolume / astronautRoomVolume);

    if (rooms < 3) {
        console.log(`The spacecraft is too small.`);
    } else if (rooms <= 10) {
        console.log(`The spacecraft holds ${rooms} astronauts.`)
    } else if (rooms > 10) {
        console.log(`The spacecraft is too big.`);
    }
}

spaceShip([3.5, 4, 5, 1.70]);
spaceShip([4.5, 4.8, 5, 1.75]);
spaceShip([3, 3, 4, 1.68]);