/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
  // your code here

  return function(...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (error, data) => {
        if(error) {
          reject(error);
        } else {
          resolve(data);
        }
      })
    })
  }
}

const dumFunc = () => {
  return "Heloo";
  // setTimeout(() => {
  //   const st = "Hello World";
  //   return st;
  // }, 2000);
}

const promisifiedFunction = promisify(dumFunc);

promisifiedFunction()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
