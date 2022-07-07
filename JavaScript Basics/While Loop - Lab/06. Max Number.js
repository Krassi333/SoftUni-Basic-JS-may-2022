function MaxNumber(input) {
    let index = 0;
    let income = input[index];

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (income != "Stop") {
        let number = Number(income);

        if (number > maxNumber) {
            maxNumber = number;
        }

        income = input[index];
        index++;
    }

    console.log(maxNumber);
}
MaxNumber(["-1", "-2", "Stop"])