function CleverLily(input) {
    let age = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toys = 0;
    let money = 0;
    let moneyCount = 1;
    let collectedMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += moneyCount * 10;
            moneyCount++;
            money -= 1;
        } else toys++;
    }

    collectedMoney = toys * toyPrice + money;

    if (collectedMoney >= washingMashinePrice) {
        console.log(`Yes! ${(collectedMoney - washingMashinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMashinePrice - collectedMoney).toFixed(2)}`);
    }
}
CleverLily(["21",

"1570.98",

"3"])