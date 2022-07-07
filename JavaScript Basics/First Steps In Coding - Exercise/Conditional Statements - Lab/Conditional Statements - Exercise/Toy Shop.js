function ToyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let allToys = puzzles + dolls + bears + minions + trucks;
    let income = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

    if (allToys >= 50) {
        let discount = income * 0.25;
        income -= discount;
    }

    let rent = income * 0.1;
    income -= rent;

    if (income >= excursionPrice) {
        console.log(`Yes! ${(income - excursionPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(excursionPrice - income).toFixed(2)} lv needed.`)
    }
}
ToyShop(["320", "8", "2", "5", "5", "1"])