function Shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let proccessors = Number(input[2]);
    let rams = Number(input[3]);

    let videoCardsPrice = videoCards * 250;
    let proccessorsPrice = videoCardsPrice * 0.35 * proccessors;
    let ramsPrice = videoCardsPrice * 0.1 * rams;

    let price = videoCardsPrice + proccessorsPrice + ramsPrice;

    if (videoCards > proccessors) {
        price -= price * 0.15;
    }
    if (price <= budget) {
        console.log(`You have ${(budget - price).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva more!`);
    }
}
Shopping(["920.45",

"3",

"1",

"1"])