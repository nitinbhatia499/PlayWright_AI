//Write a JavaScript function that receives two arrays: one with names and one with roles. 
// Return a new array of user objects in the format `{ username, email, role }`. 
// The username should be lowercase with spaces replaced by underscores, 
// and the email should use the domain `@playwrightbatch.com`.
//Input:
//names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]
//Output: [{ username: "amit_kumar", email: "amit_kumar@playwrightbatch.com", role: "admin" }, 
// { username: "neha_singh", email: "neha_singh@playwrightbatch.com", role: "viewer" }]

function createuser(name, roles) {
    let user = [];

    for (let i = 0; i < name.length; i++) {
        let username = name[i].toLowerCase().replace(" ", "_");
        let email = username + "@playwright.com";
        user.push({
            username: username,
            email: email,
            role: roles[i]
        });
    }
    return user;
}

let names = ["Amit Kumar", "Neha Singh"];
let roles = ["admin", "viewer"];
console.log(createuser(names, roles));