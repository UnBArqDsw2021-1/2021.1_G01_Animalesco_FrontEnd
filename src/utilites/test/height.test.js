import { validateHeight } from "@utilites";

//validateHeight
test("Validate height - (valid height)", () => {
  expect(validateHeight(3.5)).toBe(true);
});

test("Validate height - (height < 8)", () => {
  expect(validateHeight(4.1)).toBe(false);
});

test("Validate height - (height > 25)", () => {
  expect(validateHeight(0.04)).toBe(false);
});
