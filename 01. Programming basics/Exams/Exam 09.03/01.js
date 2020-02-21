function basketballEquipment(arguments) {
    let tax = Number(arguments.shift());

    let shoes = tax - (tax * 0.40);
    let clothes = shoes - (shoes * 0.20);
    let ball = clothes * 0.25;
    let accessories = ball * 0.20;

    let total = tax  + shoes + clothes + ball + accessories;
    console.log(total.toFixed(2));
}

basketballEquipment(["320"]);
basketballEquipment(["550"]);
basketballEquipment(["230"]);