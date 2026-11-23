// Q4. Promise Chaining

let result = new Promise((resolve, reject) => {
    resolve(10);
});

result
    .then((num) => {
        return num + 20;
    })
    .then((num) => {
        return num * 2;
    })
    .then((num) => {
        return num - 5;
    })
    .then((finalResult) => {
        console.log(finalResult);
    });
