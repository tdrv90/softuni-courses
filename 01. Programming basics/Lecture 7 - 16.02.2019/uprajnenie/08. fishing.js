function fishing(arguments) {
    let quota = Number(arguments.shift());

    let name = arguments.shift();

    let income = 0;
    let spend = 0;
    let count = 0;

    while (name != "Stop") {
        let kg = Number(arguments.shift());
        count++;
        let sum = 0;
        let price = 0;

        for (let i = 0; i < name.length; i++) {
            let value = name.charCodeAt(i);
            sum += value;
        }
        price = sum / kg;

        if (count % 3 == 0) {
            income += price;
        } else {
            spend += price;
        }
        if (count == quota) {
            console.log(`Lyubo fulfilled the quota.`);
            break;
        }
        name = arguments.shift();
    }

    let result = income - spend;

    if (result >= 0) {
        console.log(`Lyubo's profit from ${count} fishes is ${result.toFixed(2)} leva.`)
    } else {
        console.log(`Lyubo lost ${Math.abs(result).toFixed(2)} leva today.`)
    }
}

fishing([3, "catfish", 70, "carp", 20, "tench", 14]);
fishing([10, "Pike", 15, "Grass Carp", 40, "Common Rudd", 7, "Perch", 20, "Stop"]);
fishing([6, "Bluefish", 17.4, "Garfish", 14.9, "Stop"]);