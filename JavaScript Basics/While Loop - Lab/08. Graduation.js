function Graduation(input) {
    let name = input[0];
    let grade = Number(input[1]);
    let index = 2;

    let classCounter = 0;
    let allGrades = 0;

    while (grade >= 4) {
        classCounter++;
        allGrades += grade;

        if (classCounter === 12) {
            console.log(`${name} graduated. Average grade: ${(allGrades / 12).toFixed(2)}`);
            break;
        }

        grade = Number(input[index]);
        index++;        

    }

    if (grade < 4) {
            console.log(`${name} has been excluded at ${classCounter + 1} grade`);
        }

}
Graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])