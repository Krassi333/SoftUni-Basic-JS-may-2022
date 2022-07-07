function FoodDelivery(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let price = chickenMenu * 10.35 + fishMenu * 12.4 + vegetarianMenu * 8.15;
    let desert = price * 0.2;
    let totalPrice = price + desert + 2.5;

    console.log(`${totalPrice}`)


}
FoodDelivery(["9 ",
"2 ",
"6 "]

)