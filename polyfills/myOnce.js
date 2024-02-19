function myOnce(func) {
    let cachedValue = null;
    let isFuncCalled = false;

    return function(...args) {
        if(!isFuncCalled) {
            cachedValue = func.call(this, args);
            isFuncCalled = true;
        }
        return cachedValue;
    }
}