function myThrottle(func, waitTime) {
    let flag = true;

    return function(...args) {
        if(flag) {
            func.apply(this, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, waitTime);
        }
    }
}