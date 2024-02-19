/**
 * Combines multiple Promises into a single Promise that fulfills when all input Promises have fulfilled, 
 * or rejects if any of the input Promises reject.
 */
function myAll(promises) {
    const _promises = promises.map(item => item instanceof Promise ? item : Promise.resolve(item));

    if(_promises.length === 0) return Promise.resolve([]);

    return new Promise((resolve, reject) => {
        const result = [];
        let fulfilledCount = 0;

        _promises.forEach((promise, index) => {
            promise
                .then((value) => {
                    result[index] = value;
                    fulfilledCount++;

                    if(fulfilledCount === _promises.length) {
                        resolve(result);
                    }
                }, (error) => {
                    reject(error);
                })
        })
    })
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve("Value Promise 1");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value Promise 2");
    }, 2000);
});

const res = myAll([p1, p2]).then((result) => console.log(result)).catch((error) => console.log(error));