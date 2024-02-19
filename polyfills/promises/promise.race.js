/**
 * Returns a Promise that fulfills or rejects as soon as one of the input Promises fulfills or rejects.
 */

function race(promises) {
    // your code here
    const _promises = promises.map(
        (item) => item instanceof Promise ? item : Promise.resolve(item)
    )

    if(_promises.length === 0) return Promise.resolve([]);

    return new Promise((resolve, reject) => {
        _promises.forEach((promise, index) => {
            promise
                .then((value) => {
                    resolve(value);
                }, (reason) => {
                    reject(reason);
                })
        })
    })
}