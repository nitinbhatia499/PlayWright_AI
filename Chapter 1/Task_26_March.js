//Right Angled Triangle

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = " ";

    for (let j = 1; j <= i; j++) {
        row += "*";

    }
    //console.log(row);
}

//Reverse Right Angled Triangle
let n1 = 5;
for (let i = n; i >= 1; i--) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    //console.log(row);
}

//Triangle

let m = 3;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    //console.log(row);
}

//Reverse Triangle

for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}