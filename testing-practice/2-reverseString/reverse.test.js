import { reverse } from "./reverse";

test("returns reversed string", () => {
  expect(reverse("abcd")).toBe("dcba");
});
