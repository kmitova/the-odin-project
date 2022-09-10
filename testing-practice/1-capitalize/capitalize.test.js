import { capitalize } from "./capitalize";

test("return capitalized string", () => {
  expect(capitalize("abc")).toBe("Abc");
});
