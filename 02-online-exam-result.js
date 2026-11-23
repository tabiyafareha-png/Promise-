// Q2. Online Exam Result

let marks = 75;

let checkResult = new Promise((resolve, reject) => {
    if (marks < 0 || marks > 100) {
        reject("Invalid Marks");
    } else if (marks >= 50) {
        resolve("Pass");
    } else {
        reject("Fail");
    }
});

checkResult
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
