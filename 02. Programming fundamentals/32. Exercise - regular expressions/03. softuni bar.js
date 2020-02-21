function softUniBar(input) {
    let totalSum = 0;
    let line = input.shift();

    while (line !== "end of shift") {
        let pattern = /^%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<item>\w+)>[^|$%.]*\|(?<qty>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/g;
        let validOrder = pattern.exec(line);
        let name = validOrder.groups.name;
        let item = validOrder.groups.item;
        let subTotal = +validOrder.groups.qty * +validOrder.groups.price;

        totalSum += subTotal;
        console.log(`${name}: ${item} - ${subTotal.toFixed(2)}`);
        line = input.shift();
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}

// softUniBar(['%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift']
// );

softUniBar([
    "%InvalidName%<Croissant>|2|10.3$", 
    "%Peter%<Gum>1.3$", 
    "%Maria%<Cola>|1|2.4", 
    "%Valid%<Valid>valid|10|valid20$", 
    "end of shift"
]);