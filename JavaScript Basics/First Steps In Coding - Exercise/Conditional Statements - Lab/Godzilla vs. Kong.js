function GodzillaVsKong(income) {
    let budget = Number(income[0]);
    let extra = Number(income[1]);
    let outfitPrice = Number(income[2]);

    let decor = budget * 0.1;
    let allOutfits = extra * outfitPrice;

    if (extra >= 150) {
        discount = allOutfits * 0.1;
        allOutfits -= discount;
    }

    let price = decor + allOutfits;

    if (price > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(price - budget).toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - price).toFixed(2)} leva left.`)
    }
}
GodzillaVsKong(["9587.88",

"222",

"55.68"])