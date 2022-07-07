function WorldSwimmingRecord(input) {
    let worldReccord = Number(input[0]);
    let distance = Number(input[1]);
    let timeFor1Sec = Number(input[2]);

    let time = distance * timeFor1Sec;
    let slowsDown = Math.floor(distance / 15) * 12.5;
    time += slowsDown;

    if (time < worldReccord) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(time - worldReccord).toFixed(2)} seconds slower.`);
    }
}
WorldSwimmingRecord(["55555.67",

"3017",
"5.03"])