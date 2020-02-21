function volleyballVladi(arguments) {
    let year = arguments.shift();
    let holidays = Number(arguments.shift());
    let homeWeekends = Number(arguments.shift());

    let volleyballPlays = ((48 - homeWeekends) * 3 / 4) + homeWeekends + (holidays * 2 / 3);

    switch (year) {
        case "normal":
            console.log(Math.floor(volleyballPlays));
            break;
        case "leap":
            console.log(Math.floor(volleyballPlays * 1.15));
    }
}

volleyballVladi(["leap", 5, 2]);
volleyballVladi(["leap", 2, 3]);
volleyballVladi(["normal", 11, 6]);
volleyballVladi(["leap", 0, 1]);
volleyballVladi(["normal", 6, 13]);