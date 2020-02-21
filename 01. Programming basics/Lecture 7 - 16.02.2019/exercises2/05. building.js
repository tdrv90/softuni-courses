function building(arguments) {
    let floors = Number(arguments.shift());
    let rooms = Number(arguments.shift());

    for (let floor = floors; floor >= 1; floor--) {
        let output = "";
        for (let room = 0; room < rooms; room++) {
            if (floor == floors) {
                output += `L${floor}${room} `;
                continue;
            }
            if (floor % 2 == 0) {
                output += `O${floor}${room} `;
            } else {
                output += `A${floor}${room} `;
            }
        }
        console.log(output);
    }
}

building([6,4]);