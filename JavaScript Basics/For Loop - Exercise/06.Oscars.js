function Oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let judges = Number(input[index]);
    index++;

    let allPoints = academyPoints;

    for (let i = 1; i <= judges; i++) {
        let judgeName = input[index];
        index++;
        let points = Number(input[index]);
        index++;

        allPoints += (judgeName.length * points) / 2;

        if (allPoints > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${ allPoints.toFixed(1)}!`);
            break;
        }
    }

    if (allPoints <= 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - allPoints).toFixed(1)} more!`);
    }
}
Oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])