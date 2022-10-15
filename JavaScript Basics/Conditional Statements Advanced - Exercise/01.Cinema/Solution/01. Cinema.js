function Cinema(input) {
    let projection = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let seats = r * c;
    let income = 0;

    switch (projection) {
        case "Premiere":
            income = seats * 12;
            break;
        case "Normal":
            income = seats * 7.5;
            break;
        case "Discount":
            income = seats * 5;
            break;
    }

    console.log(income.toFixed(2));
}
Cinema(["Discount", "12", "30"])