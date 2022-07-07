function FishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }

    if (fishermen <= 6) {
        price -= price * 0.1;
    } else if (fishermen >= 7 && fishermen <= 11) {
        price -= price * 0.15;
    } else if (fishermen >= 12) {
        price -= price * 0.25;
    }

    if (fishermen % 2 === 0 && season != "Autumn") {
        price -= price * 0.05;
    }

    if (price <= budget) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}
FishingBoat(["2000", "Winter", "13"])