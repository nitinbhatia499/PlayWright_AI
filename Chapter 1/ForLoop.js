//Print "Hello" 5 times
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

//Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Print even numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Print the sum of first 10 natural numbers
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log(sum);

//Print the multiplication table of 5

let multiply = 5;

for (let i = 1; i <= 10; i++) {
    multiply = i * 5;
    console.log(multiply);
}