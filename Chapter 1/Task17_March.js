console.log(greet("Alice"));
function greet(name) {
    return `Hello, ${name}!`;// Its pure normal function so it support hoisting
}

//2.
//console.log(getStatus(200));
//const getStatus = (code) => code >= 200 ? "ok" : "error";// As this is an arrow function, so it does not support the hoist functionality.

function analyze(scores = []) {
    return scores.filter(s => s >= 70).length;
}
console.log(analyze());//Default parameters prevent errors when no argument is passed and
//.filter() on empty array always returns empty array

function makeCounter() {
    let count = 0;
    return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());

// const obj = {
//     env: "staging",
//     getEnv: () => {
//         return this.env;
//     }
// };
// console.log(obj.getEnv());

const obj = {
    name: "Nitin",
    getName: function () {
        return function () {
            return this.name;
        };
    }
};

const fn = obj.getName();
console.log(fn());