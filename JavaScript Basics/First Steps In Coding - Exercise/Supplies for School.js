function SuppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let preparation = Number(input[2]);
    let discountPercentages = Number(input[3]);

    let pensPrice = pens * 5.8;
    let markersPrice = markers * 7.2;
    let preparationPrice = preparation * 1.2;
    let price = pensPrice + markersPrice + preparationPrice;
    let discount = price * (discountPercentages / 100);
    price -= discount;
    console.log(`${price}`);

}
SuppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
)