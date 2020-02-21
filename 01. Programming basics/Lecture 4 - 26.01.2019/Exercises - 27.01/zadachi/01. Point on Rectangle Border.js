function pointOnRectangleBorder(arguments) {
    let x1 = Number(arguments.shift());
    let y1 = Number(arguments.shift());
    let x2 = Number(arguments.shift());
    let y2 = Number(arguments.shift());
    let x = Number(arguments.shift());
    let y = Number(arguments.shift());

    let leftRightBorder = (x == x1 || x == x2) && (y >= y1 && y <= y2);
    let topBottomBorder = (y == y1 || y == y2) && (x >= x1 && x <= x2);

    if (leftRightBorder || topBottomBorder) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}

pointOnRectangleBorder([2, -3, 12, 3, 8, -1]);
pointOnRectangleBorder([2, -3, 12, 3, 12, -1]);