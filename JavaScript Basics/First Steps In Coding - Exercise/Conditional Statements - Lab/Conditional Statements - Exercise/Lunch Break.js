function LunchBreak(input) {
    let name = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;
    let neededTime = lunchTime + restTime + episodeTime;

    if (neededTime <= breakTime) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(breakTime - neededTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(neededTime - breakTime)} more minutes.`);
    }
}
LunchBreak(["Teen Wolf",

"48",

"60"])