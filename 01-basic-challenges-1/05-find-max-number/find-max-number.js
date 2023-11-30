function findMaxNumber(numArr) {
  if (numArr.length < 2) return numArr;

  let max = numArr[0];

  for (let i = 1; i < numArr.length; i++) {
    const element = numArr[i];
    if (element > max) {
      max = element;
    }
  }
  return max;
}

module.exports = findMaxNumber;
