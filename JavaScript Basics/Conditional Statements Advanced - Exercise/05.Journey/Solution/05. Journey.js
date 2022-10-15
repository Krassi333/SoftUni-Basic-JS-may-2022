function Journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let destination;
    let vacantionType;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            price = budget * 0.3;
            vacantionType = "Camp";
        } else {
            price = budget * 0.7;
            vacantionType = "Hotel";
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            price = budget * 0.4;
            vacantionType = "Camp";
        } else {
            price = budget * 0.8;
            vacantionType = "Hotel";
        }
    } else if (budget > 1000) {
        destination = "Europe";
        price = budget * 0.9;
        vacantionType = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${vacantionType} - ${(price).toFixed(2)}`);
}
Journey(["1500", "summer"])