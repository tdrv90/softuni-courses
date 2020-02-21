function hotelRoom(arguments) {
    let month = arguments.shift();
    let nights = Number(arguments.shift());

    let studioPrice = 0;
    let apartmentPrice = 0;
    let studioRent = 0;
    let apartmentRent = 0;
    let studioDiscount = 0;
    let apartmentDiscount = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;
            studioRent = nights * studioPrice;
            apartmentRent = nights * apartmentPrice;

            if (nights > 7 && nights <= 14) {
                studioDiscount = studioRent * 0.05;
            } else if (nights > 14) {
                studioDiscount = studioRent * 0.30;
                apartmentDiscount = apartmentRent * 0.10;
            }

            studioRent = studioRent - studioDiscount;
            apartmentRent = apartmentRent - apartmentDiscount;
            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            studioRent = nights * studioPrice;
            apartmentRent = nights * apartmentPrice;

            if (nights > 14) {
                studioDiscount = studioRent * 0.20;
                apartmentDiscount = apartmentRent * 0.10;
            }

            studioRent = studioRent - studioDiscount;
            apartmentRent = apartmentRent - apartmentDiscount;
            break;
        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;
            studioRent = nights * studioPrice;
            apartmentRent = nights * apartmentPrice;

            if (nights > 14) {
                apartmentDiscount = apartmentRent * 0.10;
            }
            studioRent = studioRent - studioDiscount;
            apartmentRent = apartmentRent - apartmentDiscount;
            break;
    }

    console.log(`Apartment: ${apartmentRent.toFixed(2)} lv.`);
    console.log(`Studio: ${studioRent.toFixed(2)} lv.`);
}

hotelRoom(["May", 15]);
hotelRoom(["June", 14]);
hotelRoom(["August", 20]);