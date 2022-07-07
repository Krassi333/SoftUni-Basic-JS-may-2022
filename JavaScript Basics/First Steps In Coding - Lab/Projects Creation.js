function projectsCreation(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let projectsTime = projects * 3;
    console.log(`The architect ${name} will need ${projectsTime} hours to complete ${projects} project/s.`);

}
projectsCreation(["Sanq", "9"])


