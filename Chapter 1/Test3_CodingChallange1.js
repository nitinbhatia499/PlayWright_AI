//You receive an array of Playwright step result objects in the format { name, status, durationMs }, 
// where status can be "passed", "failed", or "skipped". Write a JavaScript function that prints a summary report with total steps,
//  passed count, failed count, skipped count, total duration, and a comma-separated list of failed step names. 
// Examples: Input: results = [{ name: "open login", status: "passed", durationMs: 400 }, 
// { name: "fill form", status: "failed", durationMs: 700 }, 
// { name: "submit", status: "skipped", durationMs: 0 }] 
// Output: Total Steps: 3 Passed: 1 Failed: 1 Skipped: 1 Total Duration: 1100ms Failed Steps: fill form

let results = [
    { name: "open login", status: "passed", durationMs: 400 },
    { name: "fill form", status: "failed", durationMs: 700 },
    { name: "submit", status: "skipped", durationMs: 0 }
];

summaryReport(results);

function summaryReport(results) {

    let passed = 0;
    let failed = 0;
    let skipped = 0;
    let totalStep = results.length;
    let totalduration = 0;
    let failedStep = [];

    for (let i = 0; i < results.length; i++) {
        totalduration = totalduration + results[i].durationMs;

        if (results[i].status === "passed") {
            passed++;
        }
        else if (results[i].status === "failed") {
            failed++;
            failedStep.push(results[i].name);
        }
        else if (results[i].status === "skipped") {
            skipped++;
        }

    }
    console.log("Total Steps: " + totalStep);
    console.log("Passed: " + passed);
    console.log("Failed: " + failed);
    console.log("Skipped: " + skipped);
    console.log("Total Duration: " + totalduration);
    console.log("Failed Steps: " + failedStep.join(", "));

}


