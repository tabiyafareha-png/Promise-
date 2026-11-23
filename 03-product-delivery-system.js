// Q3. Product Delivery System

let delivery = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;

        if (success) {
            resolve("Product Delivered Successfully");
        } else {
            reject("Delivery Failed");
        }
    }, 3000);
});

delivery
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
