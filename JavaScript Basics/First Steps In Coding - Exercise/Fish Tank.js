function FishTank(input) {

    let lenght = Number(input[0]);
    let widht = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);

    let volume = lenght * widht * height;
    let volumeLitters = volume * 0.001;
    volumeLitters -= volumeLitters * (procent / 100);

    console.log(`${volumeLitters}`);


}
FishTank(["105 ",
"77 ",
"89 ",
"18.5 "]

)
