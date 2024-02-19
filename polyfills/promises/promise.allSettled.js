/**
 * This method waits for all the Promises in the iterable to settle, whether they resolve or reject, 
 * and then fulfills with an array of result objects.
 */
function allSettled(promises) {
    const _promises = promises.map(item => item instanceof Promise ? item : Promise.resolve(item));

    if(_promises.length === 0) return Promise.resolve([]);

    return new Promise((resolve, reject) => {
        const result = [];
        let unfulfilledPromises = _promises.length;

        _promises.forEach((promise, index) => {
            promise
                .then((value) => {
                    result[index] = {
                        status: 'fulfilled',
                        value
                    }

                    unfulfilledPromises--;

                    if(unfulfilledPromises === 0) {
                        resolve(result);
                    }
                }, (reason) => {
                    result[index] = {
                        status: 'rejected',
                        reason
                    }

                    unfulfilledPromises--;

                    if(unfulfilledPromises === 0) {
                        resolve(result);
                    }
                })
        })
    })
}