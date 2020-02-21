function aquarium ([arg1, arg2, arg3,arg4]) {
    let length = parseFloat(arg1);
    let width = parseFloat(arg2);
    let height = parseFloat(arg3);
    let percentage = parseFloat(arg4);

    let volume = length * width * height * 0.001;
    percentage = percentage * 0.01;
    let liters = volume - (volume * percentage);

    console.log(liters.toFixed(3));
}

aquarium([85, 75, 47, 17]);