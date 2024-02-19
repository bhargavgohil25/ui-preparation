function mySplit(string, delimiter) {
  const res = [];

  if(delimiter === '') return Array.from(string);

  const startSplit = (str, i) => {
    if(i >= string.length) return;

    const nextDelimiterIndex = str.indexOf(delimiter);

    if(nextDelimiterIndex >= 0) {
      res.push(str.substring(0, nextDelimiterIndex));
      startSplit(str.substring(nextDelimiterIndex + delimiter.length), nextDelimiterIndex + delimiter.length);
    } else {
      res.push(str);
    }
  }

  startSplit(string, 0);
  return res;
}

console.log(mySplit('Hello World, this is Bhargav', " ")); // [ 'Hello', 'World,', 'this', 'is', 'Bhargav' ]
