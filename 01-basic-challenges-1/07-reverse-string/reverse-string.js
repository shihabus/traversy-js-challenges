function reverseString(str) {
  // sol 2:
  //   let reversedStr = "";
  //   for (let index = str.length - 1; index >= 0; index--) {
  //     reversedStr += str[index];
  //   }
  //   return reversedStr;
  //   ---------
  // sol 2:
  //   const strArr = str.split("");
  //   const middle =
  //     strArr.length % 2 == 0 ? strArr.length / 2 : Math.floor(strArr.length / 2);
  //   const strLen = strArr.length - 1;
  //   for (let p1 = 0; p1 < middle; p1++) {
  //     const p2 = strLen - p1;
  //     // let temp = strArr[p1];
  //     // strArr[p1] = strArr[p2];
  //     // strArr[p2] = temp;
  //     [strArr[p1], strArr[p2]] = [strArr[p2], strArr[p1]];
  //   }
  //   return strArr.join("");
  //   -------
  //   sol 3
  let reversedStr = "";
  for (char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

module.exports = reverseString;
