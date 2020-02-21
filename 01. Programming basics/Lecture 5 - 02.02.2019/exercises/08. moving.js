function movingApp(arguments) {
    let width = Number(arguments.shift());
    let length = Number(arguments.shift());
    let height = Number(arguments.shift());

    let totalSpace = width * length * height;
    let totalBoxes = 0;
    let diff = 0;

    let command = arguments.shift();

    while (command != "Done") {
        let box = Number(command);
        totalBoxes += box;
        diff = Math.abs(totalBoxes - totalSpace);

        if (totalBoxes >= totalSpace) {
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        }
        command = arguments.shift();
    }

    if (command == "Done") {
        console.log(`${diff} Cubic meters left.`);
    }
}


movingApp([10, 1, 2, 4, 6, "Done"]);
movingApp([10, 10, 2, 20, 20, 20, 20, 122]);