function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let depositTime = Number(input[1]);
    let procent = Number(input[2]);
    
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let sum = depositAmount + depositTime * ((depositAmount * procent / 100) / 12);
    console.log(`${sum}`);
}
depositCalculator(["2350",
    "6 ",
    "7 "])