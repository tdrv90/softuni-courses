function ownBusiness(arguments) {
    let width = Number(arguments.shift());
    let length = Number(arguments.shift());
    let height = Number(arguments.shift());

    let volume = width * length * height;
    let totalComps = 0;
    let diff = 0;

    let command = arguments.shift();

    while (command != "Done") {
        let comps = Number(command);

        totalComps += comps;
        diff = Math.abs(volume - totalComps);

        if (totalComps >= volume) {
            console.log(`No more free space! You need ${diff} Cubic meters more.`)
            break;
        }
        command = arguments.shift();
    }

    if (command == "Done") {
        console.log(`${diff} Cubic meters left.`);
    }
}

ownBusiness([10, 10, 2, 20, 20, 20, 20, 122]);
ownBusiness([10, 1, 2, 4, 6, "Done"]);