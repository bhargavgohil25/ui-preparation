Array.prototype.myForEach = function(callback, thisArg) {
    if (this === null || this === undefined) {
        throw new TypeError("Cannot read property 'myForEach' of null or undefined");
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const len = this.length;

    // Set default thisArg to 'this' if not provided
    if (thisArg === undefined) {
        thisArg = this;
    }

    for (let i = 0; i < len; i++) {
        if (i in this) {
            callback.call(thisArg, this[i], i, this);
        }
    }
};
