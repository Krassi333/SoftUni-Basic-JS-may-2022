function WorkingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (hour >= 10 && hour <= 18) {

        if (day === "Sunday") {
            console.log("closed");
        }
        else {
            console.log("open");
        }
    } else {
        console.log("closed");
    }
}
WorkingHours(["11", "Sunday"])