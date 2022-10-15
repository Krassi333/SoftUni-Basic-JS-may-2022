function SkiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let price = 0;
    let discount = 0;

    switch (roomType) {
        case "room for one person":
            price = (days-1) * 18;
            break;
        case "apartment":
            price = (days-1) * 25;

            if (days < 10) {
                discount = price * 0.3;
            } else if (days >= 10 && days <= 15) {
                discount = price * 0.35;
            } else if (days > 15) {
                discount = price * 0.5;
            }

            price -= discount;
            break;
        case "president apartment":
            price = (days-1) * 35;

            if (days < 10) {
                discount = price * 0.1;
            } else if (days >= 10 && days <= 15) {
                discount = price * 0.15;
            } else if (days > 15) {
                discount = price * 0.2;
            }

            price -= discount;
            break;
    }

    if (rating === "positive") {
        price += price * 0.25;
    } else {
        price -= price * 0.1;
    }

    console.log(`${price.toFixed(2)}`);
}
SkiTrip(["2", "apartment", "positive"])