function Histogram(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    let p1 = 0;  //under 200
    let p2 = 0;  //200 - 399
    let p3 = 0;  //400 - 599
    let p4 = 0;  //600 - 799
    let p5 = 0;  // 800 and up

    for (let i = 1; i <= n; i++) {
        let number = Number(input[index]);
        index++;
        if (number < 200) {
            p1++;
        } else if (number >= 200 && number <= 399) {
            p2++;
        } else if (number >= 400 && number <= 599) {
            p3++;
        } else if (number >= 600 && number <= 799) {
            p4++;
        } else if (number >= 800) {
            p5++;
        }
    }

    let p1Part = p1 / n * 100;
    let p2Part = p2 / n * 100;
    let p3Part = p3 / n * 100;
    let p4Part = p4 / n * 100;
    let p5Part = p5 / n * 100;

    console.log(`${p1Part.toFixed(2)}%`);
    console.log(`${p2Part.toFixed(2)}%`);
    console.log(`${p3Part.toFixed(2)}%`);
    console.log(`${p4Part.toFixed(2)}%`);
    console.log(`${p5Part.toFixed(2)}%`);
}
Histogram(["7", "800", "801", "250", "199", "399", "599", "799"])