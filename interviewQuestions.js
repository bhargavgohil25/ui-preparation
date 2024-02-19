/*
  print the sum of previous values
*/

const calculateSum = (args) => {
  return args.reduce((acc, currentValue) => acc + currentValue, 0);
}

function sum(...args1) {
  let ans = calculateSum(args1);

  return function cur(...args2) {
    let len = arguments.length;
    if (len > 0) {
      ans += calculateSum(args2);
      return cur;
    } else {
      console.log(ans);
      return;
    }
  };
}

sum(1)(2,5)(3)(4)();