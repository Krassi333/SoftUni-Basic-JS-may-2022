function BasketballEquipment(input) {

    let tax = Number(input[0]);

    let shoes = tax * 0.6;
    let outfit = shoes * 0.8;
    let ball = outfit / 4;
    let accessories = ball / 5;
    let price = tax + shoes + outfit + ball + accessories;

    console.log(`${price}`)
}
BasketballEquipment(["550 "])