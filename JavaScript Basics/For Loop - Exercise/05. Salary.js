function Salary(input) {
    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    for (let i = 1; i <= tabs; i++) {
        let website = input[index];
        index++;

        switch (website) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary > 0) {
        console.log(`${Math.floor(salary)}`);
    }
}
Salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])
