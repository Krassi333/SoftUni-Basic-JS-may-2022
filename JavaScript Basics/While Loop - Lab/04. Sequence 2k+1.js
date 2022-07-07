function Sequence2kPlus1(input) {
    let n = Number(input[0]);

    let currentNumber = 1;
    // console.log(currentNumber);

    while (currentNumber <= n) {
        console.log(currentNumber);
        currentNumber = currentNumber * 2 + 1;

    }
}
Sequence2kPlus1(["31"])