function reverse(string) {
  let splitStr = string.split("");
  let arr = splitStr.reverse();
  let result = arr.join("");
  return result;
}

export { reverse };
