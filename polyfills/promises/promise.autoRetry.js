function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    return new Promise((resolve, reject) => {
        let numTries = 0;

        const callFetcherFunction = () => fetcher()
            .then((data) => {
                resolve(data);
            }, (error) => {
                if(numTries < maximumRetryCount) {
                    callFetcherFunction();
                    numTries++;
                } else {
                    reject(error);
                }
            })

        callFetcherFunction();
    })
}