import { analyze } from "./analyze";

describe("analyze array tests", () => {
  const result = analyze([1, 8, 3, 4, 2, 6]);
  it("tests average", () => {
    expect(result.average).toBe(4);
  });

  it("tests min", () => {
    expect(result.min).toBe(1);
  });

  it("tests max", () => {
    expect(result.max).toBe(8);
  });
  it("tests length", () => {
    expect(result.length).toBe(6);
  });
});
