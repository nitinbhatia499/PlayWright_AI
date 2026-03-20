let response = [200, 201, 404, 500, 404, 200, 503];
// 1.Check if ALL responses are successful (200–299)
let AllSuccessful = response.every(status => status >= 200 && status <= 299)
console.log("Are all response successful -> ", AllSuccessful);


//Find the first non success code

let NonSuccessCode = response.find(code => !(code >= 200 && code < 300))
console.log(NonSuccessCode);

//Return all unique code

let unique = [];

for (let i = 0; i < response.length; i++) {
    if (!(unique.includes(response[i]))) {
        unique.push(response[i]);
    }
}
console.log("All unique codes are: ", unique);


//-------------------------------------------------
let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();// This will sort as String so 1200 will come as fastest one.
console.log("Fastest:", sorted[0]);

let ActualSortedNumber = responseTimes.sort((a, b) => (a - b));
//sorted number are in ascending order if you want descending order then used b-a
console.log(ActualSortedNumber);

//Deep vs Shallow Copy
let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);//// Output is Fail, DUE to SHALLOW COPY. 

let suite3 = [{ name: "login", status: "pass" }];
let suite4 = JSON.parse(JSON.stringify(suite3)); // Deep copy
suite4[0].status = "fail";
console.log("DEEP COPY-> ", suite3[0].status); // Output is Pass, DUE to DEEP COPY.

