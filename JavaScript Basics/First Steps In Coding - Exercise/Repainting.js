function Repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursWork = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.5;
    let paintPrice = (paint + paint * 0.1) * 14.5;
    //paintPrice += paintPrice * 0.1;
    let thinnerPrice = thinner * 5;
    let price = nylonPrice + paintPrice + thinnerPrice + 0.4;
    let priceWork = price * 0.3 * hoursWork;

    console.log(`${price + priceWork}`)


}
Repainting(["5 ",
"10 ",
"10 ",
"1 "]

)