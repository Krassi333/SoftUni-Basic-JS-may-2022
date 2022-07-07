function OldBooks(input){
let index=0;
let lookingFor=input[index];
index++;
let book=input[index];
index++;

let bookCount=0;

while(book != lookingFor){
    book=input[index];
    index++;
    bookCount++;

    if(book==="No More Books"){
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCount} books.`);
        break;
    }   
}

 if(book===lookingFor){
        console.log(`You checked ${bookCount} books and found it.`);
    }
}
OldBooks(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])