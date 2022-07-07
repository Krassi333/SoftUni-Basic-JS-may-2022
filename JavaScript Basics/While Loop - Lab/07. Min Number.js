function MinNumber(input) {
    let index = 0;
    let inputNumber = input[index];
    index++;

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (inputNumber != "Stop") {
        let number = Number(inputNumber);

        if (number < minNumber) {
            minNumber = number;
        }

        inputNumber = input[index];
        index++;
    }

    console.log(minNumber);
}
MinNumber(["-10", "20", "-30", "Stop"])