function TennisRanklist(input) {
    let index = 0;
    let tournirs = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;

    let tournirsPoints = 0;
    let countWins = 0;

    for (let i = 1; i <= tournirs; i++) {
        let result = input[index];
        index++;
        switch (result) {
            case "W":
                tournirsPoints += 2000;
                countWins++;
                break;
            case "F":
                tournirsPoints += 1200;
                break;
            case "SF":
                tournirsPoints += 720;
                break;

        }
    }

    console.log(`Final points: ${startingPoints + tournirsPoints}`);
    console.log(`Average points: ${Math.floor(tournirsPoints / tournirs)}`);
    console.log(`${((countWins * 100) / tournirs).toFixed(2)}%`);
}
TennisRanklist(["4",

"750",

"SF",

"W",

"SF",

"W"])