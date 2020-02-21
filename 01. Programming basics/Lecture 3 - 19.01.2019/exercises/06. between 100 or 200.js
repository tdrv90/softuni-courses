function between100and200 (arguments) {
    let nr = Number(arguments.shift());

    if (nr < 100) {
        console.log("Less than 100");
    } else if (nr <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}

between100and200([99]);
between100and200([199]);
between100and200([299]);