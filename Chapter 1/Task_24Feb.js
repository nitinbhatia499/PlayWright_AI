

//Triangle Classifier:
//Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, 
// determine if the triangle is equilateral (all sides are equal), 
// isosceles (exactly two sides are equal), 
// or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let a = 30;
let b = 50;
let c = 90;

if (a === b && b === c) {
    console.log("Equilateral triangle");
}
else if (a === c || a === b || b === c) {
    console.log("Isosceles Triangle");
}
else if (a !== b && b !== c && a !== c) {
    console.log("Scalene Triangle");
}

//Create a program that determines 
// whether a given year is a leap year. 
// A leap year is divisible by 4, 
// but not by 100 unless it is also divisible by 400. Use an if-else statement to make this determination.

let year = 2020;


if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(`${year} leap year.`);
}
else {
    console.log(`${year} not a leap year.`);
}