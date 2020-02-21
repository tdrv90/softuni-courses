function circleAreaPerimeter ([arg1]) {
    let radius = parseFloat(arg1);

    let area = Math.PI * radius * radius;
    let perimeter = 2 * Math.PI * radius;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

circleAreaPerimeter([3]);