function analyze(numbers) {
  let avgValue = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  let minValue = numbers.reduce((a, b) => Math.min(a, b), Infinity);
  let maxValue = numbers.reduce((a, b) => Math.max(a, b), -Infinity);
  let len = numbers.length;

  const result = {
    average: avgValue,
    min: minValue,
    max: maxValue,
    length: len,
  };

  return result;
}

// console.log(analyze([1, 8, 3, 4, 2, 6]));

export { analyze };
