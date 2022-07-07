function TrekkingMania(input) {
    let index = 0;
    let groups = Number(input[index]);
    index++;

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let allPeople = 0;

    for (let i = 1; i <= groups; i++) {
        let people = Number(input[index]);
        index++;
        allPeople += people;

        if (people <= 5) {
            musala += people;
        } else if (people >= 6 && people <= 12) {
            monblan += people;
        } else if (people >= 13 && people <= 25) {
            kilimanjaro += people;
        } else if (people >= 26 && people <= 40) {
            k2 += people;
        } else if (people >= 41) {
            everest += people;
        }


    }

    console.log(`${(musala / allPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / allPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / allPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / allPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / allPeople * 100).toFixed(2)}%`);

}
TrekkingMania(["5",

"25",

"41",

"31",

"250",

"6"])