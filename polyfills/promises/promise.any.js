/**
 * It waits for the first Promise in the iterable to fulfill (resolve), and if none of the Promises fulfill (all reject), 
 * it rejects with an AggregateError containing all the rejection reasons.
 */
function any(promises) {
    return new Promise((resolve, reject) => {
        let isFulfilled = false;
        const errors = [];
        let errorCount = 0;

        promises.forEach((promise, index) => {
            promise
                .then((data) => {
                    if(!isFulfilled) {
                        resolve(data);
                        isFulfilled = true;
                    }
                }, (error) => {
                    errors[index] = error;
                    errorCount++;

                    if(errorCount === promises.length) {
                        reject(new AggregateError('none resolved', errors));
                    }
                })
        })
    })
}