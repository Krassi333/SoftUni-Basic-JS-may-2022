function Time15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    minutes += 15;

    if (minutes >= 60) {
        hour++;
        minutes -= 60;
    }

    if (hour >= 24) {
        hour -= 24;
    }

    if (minutes < 10) {
        console.log(`${hour}:0${minutes}`);
    } else {
        console.log(`${hour}:${minutes}`);
    }
}
Time15Minutes(["12", "49"])