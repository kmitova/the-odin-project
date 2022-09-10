// const calculator = {
//   m,
//   n,
//   add: function () {
//     return this.m + this.n;
//   },
// };

// calculator[m] = 5;
// calculator.n = 4;

// console.log(calculator.add());

const Calculator = () => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
};

const cal = Calculator();
console.log(cal.add(5, 4));

export { Calculator };
