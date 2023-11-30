function titleCase(str) {
  const strArr = str.toLowerCase().split(" ");
  return strArr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

module.exports = titleCase;
