// Q1. Bank Account Withdrawal

let balance = 10000;
let withdrawal = 7000;

let withdrawMoney = new Promise((resolve, reject) => {
    if (balance >= withdrawal) {
        resolve("Withdrawal Successful");
    } else {
        reject("Insufficient Balance");
    }
});

withdrawMoney
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
