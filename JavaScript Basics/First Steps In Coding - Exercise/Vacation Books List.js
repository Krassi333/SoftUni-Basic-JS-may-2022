function VacationBooksList(input) {

    let pagesInBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let timeBook = pagesInBook / pagesPerHour;
    let timeBookPerDay = timeBook / days;

    console.log(`${timeBookPerDay}`)
}
VacationBooksList(["432 ",
"15 ",
"4 "]
)