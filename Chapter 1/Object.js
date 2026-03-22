let a = { status: "pass" };
//console.log(a.status);
//console.log(a["status"]);

let a1 = { status: 'pass' };
console.log(a1.status);

let b = a;  // b copies the REFERENCE, not the object
b.status = "fail";
console.log(a.status);


// Two separate objects — different memory
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);

let a2 = 10;
let b2 = a2;
b2 = 99;
console.log(a2, b2);

let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val, obj2.val);