//Print "Hello" 5 times
let i = 0;
while (i < 5) {
    console.log("Hello");
    i++;
}

//Print numbers from 1 to 10
let i1 = 1;
while (i1 <= 10) {
    console.log(i1);
    i1++;
}

//Print even numbers from 1 to 20
let num = 1
while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

//Print the sum of first 10 natural numbers
let sum = 0;
let i2 = 1;

while (i2 <= 10) {
    sum = sum + i2;
    i2++;
}
console.log(sum);

//Print the multiplication table of 7

let multiply = 7;
let number = 1;
while (number <= 10) {
    multiply = number * 5;
    number++;
    console.log(multiply);
}