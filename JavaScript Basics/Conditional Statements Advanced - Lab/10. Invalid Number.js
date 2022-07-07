function InvalidNumber(input) {
    let num = Number(input[0]);
    let isValid = false;

    if ((num >= 100 && num <= 200) || num === 0) {
        isValid = true;
    }

    if (isValid === false) {
        console.log("invalid");
    }
}
InvalidNumber(["150"])