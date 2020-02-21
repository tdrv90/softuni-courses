function building(arguments) {

    // (e) => console.log(e);
    let floorCount = Number(arguments[0]);
    let roomCount = Number(arguments[1]);


    for (let floor = floorCount; floor >= 1; floor--) {
        let output = "";
        for (let room = 0; room < roomCount; room++) {
            if (floor == floorCount) {
                output += `L${floor}${room} `;
                continue;
            }

            if (floor % 2 == 0) {
                output += `O${floor}${room} `;
            } else {
                output += (`A${floor}${room} `);
            }
        }
        console.log(output);
    }
}

building([6, 4]);