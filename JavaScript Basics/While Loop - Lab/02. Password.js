function Password(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let word = input[index];
    index++;

    while (word != password) {
        word = input[index];
        index++;

    }

    if (word === password) {
        console.log(`Welcome ${username}!`);
    }

}
Password(["Gosho", "secret", "secret"])