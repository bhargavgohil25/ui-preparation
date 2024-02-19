function myShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randIdx = Math.floor(Math.random() * (i + 1));
    const storedItem = arr[i];
    arr[i] = arr[randIdx];
    arr[randIdx] = storedItem;

    // [arr[i], arr[randIdx]] = [arr[randIdx], arr[i]];
  }

  return arr;
}

const arr = [1,2,4,5,7,8,6,4,8];
console.log(myShuffle(arr));