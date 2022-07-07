function SumSeconds(input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let time = firstTime + secondTime + thirdTime;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}
SumSeconds(["14", "12", "10"])