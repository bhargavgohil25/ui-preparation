/**
 * @param {...Function} args
 * @returns Function
 */
export default function compose(...fns) {

  return function (arg) {
    return fns.reduceRight((acc, func) => func(acc), arg);
  }

  // return function (arg) {
  //   let res = arg;

  //   for(let i = fns.length - 1; i >= 0; i--) {
  //     res = fns[i](res);
  //   }

  //   return res;
  // };
}

const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;

const composedFn = compose(subtract10, double, add1);
composedFn(3); // (3 + 1) * 2 - 10 => -2