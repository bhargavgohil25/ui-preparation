function partial(func, ...args) {
  return function(...restArgs) {
    const copyArgs = args.map(
      (arg) => arg === partial.placeholder ? restArgs.shift() : arg
    );

    return func.call(this, ...copyArgs, ...restArgs);
  }
}
partial.placeholder = Symbol();



const func = (...args) => console.log(args);

const _ = partial.placeholder
const func1_3 = partial(func, 1, _, 3)
func1_3(2,4)
// [1,2,3,4]


const func123 = partial(func, 1,2,3)
func123(4)
// [1,2,3,4]