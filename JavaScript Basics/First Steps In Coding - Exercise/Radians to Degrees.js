function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let degreece = radians * 180 / Math.PI;
    console.log(`${degreece}`)

}
radiansToDegrees(["3.1416"])