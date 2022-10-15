function OnTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinutes = Number(input[3]);

    let examTime = examHour * 60 + examMinutes;
    let arriveTime = arriveHour * 60 + arriveMinutes;
    let difference = arriveTime - examTime;

    if (difference === 0) {
        console.log("On Time");
    } else if (difference >= -30 && difference < 0) {
        console.log("On Time");
        console.log(`${Math.abs(difference)} minutes before the start`);
    }

    if (difference < -30) {
        console.log("Early");
        if (Math.abs(difference) >= 60) {
            let hour = Math.abs(Math.trunc(difference / 60));
            let minutes = Math.abs(difference % 60);
            if (minutes < 10) {
                console.log(`${hour}:0${minutes} hours before the start`);
            } else {
                console.log(`${hour}:${minutes} hours before the start`);
            }
        }else {
            console.log(`${Math.abs(difference)} minutes before the start`);
        }

    }

    if (difference > 0) {
        console.log("Late");
        if (difference >= 60) {
            let hour = Math.trunc(difference / 60);
            let minutes = difference % 60;

            if (minutes < 10) {
                console.log(`${hour}:0${minutes} hours after the start`);
            } else {
                console.log(`${hour}:${minutes} hours after the start`);
            }

        } else {
            console.log(`${difference} minutes after the start`);
        }

    }
}
OnTimeForTheExam(["14", "00", "14", "00"])