function myNew(constructorFunc, ...args) {

    // 1. Create new object
    // 2. That new object will need prototype of constructor so we can use setPrototypeOf for that
    // 3. Call constructor function with specified arguments and with 'this' bound to newly created object to set up 'this' in constructor
    // 4. It's unusual but sometimes function constructor may return another object,
    // so we check if it returns an object and if it is
    // then we want to return it, null is an object so we check for that


    const obj = {};

    Object.setPrototypeOf(obj, constructorFunc.prototype);
    // obj.__proto__ = constructorFunc.prototype // --> old method

    const returnObj = constructorFunc.call(obj, ...args);

    if(returnObj && typeof returnObj === 'object') {
        return returnObj;
    }

    return obj;
}