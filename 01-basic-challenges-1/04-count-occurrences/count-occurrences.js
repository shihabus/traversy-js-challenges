function countOccurrences(str, char) {
  //   let count = 0;
  //   [...str]?.forEach((strChar) => {
  //     if (strChar === char) {
  //       ++count;
  //     }
  //   });
  //   return count;

  // split the string at all instance where we have the character
  const slipStr = str.split(char);
  return slipStr.length - 1;
}

module.exports = countOccurrences;
