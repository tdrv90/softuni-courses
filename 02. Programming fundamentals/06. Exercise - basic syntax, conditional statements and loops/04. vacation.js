function vacation(numberOfPeople, typeOfGroup, day) {
    let total = 0;

    switch (typeOfGroup) {
        case "Students":
            if (day == "Friday") {
                total = numberOfPeople * 8.45;
            } else if (day == "Saturday") {
                total = numberOfPeople * 9.80;
            } else if (day == "Sunday") {
                total = numberOfPeople * 10.46;
            }

            break;
        case "Business":
            if (day == "Friday") {
                total = numberOfPeople * 10.90;
            } else if (day == "Saturday") {
                total = numberOfPeople * 15.60;
            } else if (day == "Sunday") {
                total = numberOfPeople * 16;
            }
            break;
        case "Regular":
            if (day == "Friday") {
                total = numberOfPeople * 15;
            } else if (day == "Saturday") {
                total = numberOfPeople * 20;
            } else if (day == "Sunday") {
                total = numberOfPeople * 22.50;
            }
            break;
    }

    if (typeOfGroup == "Students" && numberOfPeople >= 30) {
        total = total - (total * 0.15);
    } else if (typeOfGroup == "Business" && numberOfPeople >= 100) {
        if (day == "Friday") {
            total = total - 10 * 10.90
        } else if (day == "Saturday") {
            total = total - 10 * 15.60
        } else if (day == "Sunday") {
            total = total - 10 * 16
        }
    } else if (typeOfGroup == "Regular" && (numberOfPeople >= 10 && numberOfPeople <= 20)) {
        total = total - total * 0.05;
    }

    console.log(`Total price: ${total.toFixed(2)}`)
}

vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")