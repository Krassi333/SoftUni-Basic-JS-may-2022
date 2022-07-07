function AccountBalance(input) {
    let index = 0;


    let income = input[index];
    index++;
    let sum = 0;

    while (income != "NoMoreMoney") {
        let money = Number(income);

        if (money < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            console.log(`Increase: ${money.toFixed(2)}`);
            sum += money;
        }
        income = input[index];
        index++;

    }

    console.log(`Total: ${sum.toFixed(2)}`);
}
AccountBalance(["120", "45.55", "-150"])