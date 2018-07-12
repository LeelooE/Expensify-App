const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        // reject('Something went wrong!');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1',data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other resolved data');
            // reject('Something went wrong!');
        }, 5000);
    });
}).then((str) => {
    console.log('some text', str);
}).catch((error)=>{
    console.log(error);
});

console.log('after');