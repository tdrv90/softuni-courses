function tradeComissions(arguments) {
    let city = arguments.shift().toLowerCase();
    let revenue = Number(arguments.shift());

    let comission = -1;

    switch (city) {
        case "sofia":
            if (revenue >= 0 && revenue <= 500) {
                comission = revenue * 0.05;
            } else if (revenue > 500 && revenue <= 1000) {
                comission = revenue * 0.07;
            } else if (revenue > 1000 && revenue <= 10000) {
                comission = revenue * 0.08;
            } else if (revenue > 10000) {
                comission = revenue * 0.12;
            } else {
                console.log("error");
            }
            console.log(comission.toFixed(2));
            break;
        case "varna":
            if (revenue >= 0 && revenue <= 500) {
                comission = revenue * 0.045;
            } else if (revenue > 500 && revenue <= 1000) {
                comission = revenue * 0.075;
            } else if (revenue > 1000 && revenue <= 10000) {
                comission = revenue * 0.10;
            } else if (revenue > 10000) {
                comission = revenue * 0.13;
            } else {
                console.log("error");
            }
            console.log(comission.toFixed(2));
            break;
        case "plovdiv":
            if (revenue >= 0 && revenue <= 500) {
                comission = revenue * 0.055;
            } else if (revenue > 500 && revenue <= 1000) {
                comission = revenue * 0.08;
            } else if (revenue > 1000 && revenue <= 10000) {
                comission = revenue * 0.12;
            } else if (revenue > 10000) {
                comission = revenue * 0.145;
            } else {
                console.log("error");
            }
            if (comission > -1) {
                console.log(comission.toFixed(2));
            }
            break;
        default:
            console.log("error");
    }
}


// tradeComissions(["Sofia", 1500]);
// tradeComissions(["Plovdiv", 499.99]);
// tradeComissions(["Varna", 3874.50]);
// tradeComissions(["Kaspichan", -50]);
tradeComissions(["Plovdiv", -20]);