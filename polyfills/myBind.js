Function.prototype.myBind = function(...args) {
    // as printName.myBind() is called
    // which means that inside myBind() function the `this` keyword basically points to printName() function
    let func = this;
    let params = args.slice(1);
    return function(...args2) {
        func.apply(args[0], params.concat(args2))
    }
}

let name = {
    firstName: "bhargav",
    lastName: "gohil"
}

let printName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state);
};

let printMyName = printName.myBind(name, "nashik");
printMyName("maharashtra"); // "bhargav gohil nashik maharashtra"