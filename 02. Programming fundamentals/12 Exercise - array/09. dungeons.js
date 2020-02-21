function dungeonestDark([arguments]) {
    let rooms = arguments.toString();
    rooms = arguments.split("|");
    let health = 100;
    let coins = 0;
    let isAlive = true;

    for (let i = 0; i < rooms.length; i++) {
        let separatedRooms = rooms[i].split(" ");
        let action = separatedRooms[0];
        let amount = Number(separatedRooms[1]);
        let healed = 0;

        switch (action) {
            case "potion":
                if (health + amount >= 100) {
                    healed = 100 - health;
                    health = 100;
                } else {
                    health += amount;
                    healed = amount;
                }
                break;
            case "chest":
                coins += amount;
                break;
            default:
                health -= amount;
                break;
        }

        if (health <= 0) {
            console.log(`You died! Killed by ${action}.`);
            console.log(`Best room: ${i + 1}`);
            isAlive = false;
            break;
        } else {
            if (action === "potion") {
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`)
            } else if (action === "chest") {
                console.log(`You found ${amount} coins.`);
            } else {
                console.log(`You slayed ${action}.`);
            }
        }
    }

    if (isAlive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

// dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");