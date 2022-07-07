function SumNumbers(input) {
    let index = 0;
    let number = Number(input[index]);
    index++;

    let sum = 0;

    while (sum < number) {
        let currentNumber = Number(input[index]);
        index++;
        sum += currentNumber;
    }

    console.log(sum);
}
SumNumbers(["20", "1", "2", "3", "4", "5", "6"])