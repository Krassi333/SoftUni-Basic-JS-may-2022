function GladiatorExpenses(losts, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let countShieldBrokes = 0;
    let price = 0;

    for (let i = 1; i <= losts; i++) {

        let helmetBroke = false;
        let swordBroke = false;
        let shieldBroke = false;
        let armorBroke = false;

        if (i % 2 === 0) {
            helmetBroke = true;
        }

        if (i % 3 === 0) {
            swordBroke = true;
        }

        if (helmetBroke == true && swordBroke == true) {
            shieldBroke = true;
            countShieldBrokes++;
        }

        if (countShieldBrokes  == 2) {
            armorBroke = true;
            countShieldBrokes=0;
        }

        if (helmetBroke) {
            price += helmetPrice;
        }

        if (swordBroke) {
            price += swordPrice;
        }

        if (shieldBroke) {
            price += shieldPrice;
        }

        if (armorBroke) {
            price += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);

}
GladiatorExpenses(23,

    12.50,
    
    21.50,
    
    40,
    
    200)