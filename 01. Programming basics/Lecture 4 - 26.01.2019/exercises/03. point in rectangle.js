function pointInRectangle(arguments) {
    let x1 = Number(arguments.shift());
    let y1 = Number(arguments.shift());
    let x2 = Number(arguments.shift());
    let y2 = Number(arguments.shift());
    let x = Number(arguments.shift());
    let y = Number(arguments.shift());

    if ((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) {
        console.log("Inside");
    } else {
        console.log("Outside");
    }
}

pointInRectangle([2, -3, 12, 3, 8, -1]);
pointInRectangle([-1, -3, 4, 1, 0.5, 1]);
pointInRectangle([2, -3, 12, 3, 11, -3.5]);
pointInRectangle([-1, -3, 4, 1, -1.2, 1.4]);