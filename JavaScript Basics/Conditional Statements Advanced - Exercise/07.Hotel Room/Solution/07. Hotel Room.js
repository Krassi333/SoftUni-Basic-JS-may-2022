function HotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let priceApartament = 0;
    let priceStudio = 0;

    switch (month) {
        case "May":
        case "October":
            priceStudio = nights * 50;
            priceApartament = nights * 65;
            if (nights > 7 && nights <= 14) {
                priceStudio -= priceStudio * 0.05;
            } else if (nights > 14) {
                priceStudio -= priceStudio * 0.3;
            }
            break;
        case "June":
        case "September":
            priceStudio = nights * 75.2;
            priceApartament = nights * 68.7;
            if (nights > 14) {
                priceStudio -= priceStudio * 0.2;
            }
            break;
        case "July":
        case "August":
            priceStudio = nights * 76;
            priceApartament = nights * 77;
            break;

    }

    if (nights > 14) {
        priceApartament -= priceApartament * 0.1;
    }

    console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}
HotelRoom(["June",

"14"])