function areaOfFigures (arguments) {
    let shape = arguments.shift().toLowerCase();
    let area = 0;

    switch (shape) {
        case "square":
            let squareSide = Number(arguments.shift());
            area = squareSide * squareSide;
            console.log(area);

            break;
    
        case "rectangle":
            let rectangleSide1 = Number(arguments.shift());
            let rectangleSide2 = Number(arguments.shift());
            area = rectangleSide1 * rectangleSide2;
            console.log(area);
            break;
        
        case "circle":
            let circleRadius = Number(arguments.shift());
            area = Math.PI * circleRadius * circleRadius;
            console.log(area.toFixed(3));

            break;
        
        case "triangle":
            let triangleSide = Number(arguments.shift());
            let triangleHeight = Number(arguments.shift());
            area = triangleSide * triangleHeight / 2;
            console.log(area.toFixed(3));

    }

    // console.log(area.toFixed(3));
}

areaOfFigures(["square", 5]);
areaOfFigures(["rectangle", 7, 2.5]);
areaOfFigures(["circle", 6]);
areaOfFigures(["triangle", 4.5, 20]);