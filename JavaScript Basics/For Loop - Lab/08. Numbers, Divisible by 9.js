function NumbersDivisibleBy9(input) {
    let startNumber = Number(input[0]);
    let stopNumber = Number(input[1]);

    let sum = 0;

    for (let i = startNumber; i <= stopNumber; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);

    for (let i = startNumber; i <= stopNumber; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}
NumbersDivisibleBy9(["100", "200"])