import { cipher } from "./cipher";

it("tests with one", () => {
  expect(cipher(1, "ilovebts")).toBe("jmpwfcut");
});

it("tests with 2", () => {
  expect(cipher(2, "ilovebts")).toBe("knqxgdvu");
});
