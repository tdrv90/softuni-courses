function rectangleArea (arguments) {
    let x1 = Number(arguments.shift());
    let y1 = Number(arguments.shift());
    let x2 = Number(arguments.shift());
    let y2 = Number(arguments.shift());

    let length = Math.max(x1, x2) - Math.min(x1,x2);
    let width = Math.max(y1, y2) - Math.min(y1,y2);

    let area = length * width;
    let perimeter = (length + width) * 2;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

rectangleArea([600.25, 500.75, 100.50, -200.50]);