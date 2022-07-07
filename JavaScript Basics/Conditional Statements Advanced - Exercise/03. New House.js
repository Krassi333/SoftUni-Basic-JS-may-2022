function NewHouse(input) {
    let flowerType = input[0];
    let flowers = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    if (flowerType === "Roses") {
        price = flowers * 5;
        if (flowers > 80) {
            price -= price * 0.1;
        }
    } else if (flowerType === "Dahlias") {
        price = flowers * 3.8;
        if (flowers > 90) {
            price -= price * 0.15;
        }
    } else if (flowerType === "Tulips") {
        price = flowers * 2.8;
        if (flowers > 80) {
            price -= price * 0.15;
        }
    } else if (flowerType === "Narcissus") {
        price = flowers * 3;
        if (flowers < 120) {
            price += price * 0.15;
        }
    } else {
        price = flowers * 2.5;
        if (flowers < 80) {
            price += price * 0.2;
        }
    }

    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${flowers} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }

}
NewHouse(["Narcissus", "119", "360"])