import { Calculator } from "./calculator";

describe("calculator tests", () => {
  const cal = Calculator();
  it("tests if cal is defined", () => {
    expect(cal).toBeDefined();
  });
  it("tests add method", () => {
    expect(cal.add(5, 4)).toBe(9);
  });
  it("tests subtract method", () => {
    expect(cal.sub(5, 4)).toBe(1);
  });
  it("tests multiply method", () => {
    expect(cal.mul(5, 4)).toBe(20);
  });
  it("tests divide method", () => {
    expect(cal.div(16, 4)).toBe(4);
  });
});
