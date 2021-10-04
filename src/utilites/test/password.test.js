import { validatePassword } from "@utilites";

//validatePassword
test("Validate password - (valid password)", () => {
  expect(validatePassword("aaaaaaaaaaa")).toBe(true);
});

test("Validate password - (password < 8)", () => {
  expect(validatePassword("aaaaaaa")).toBe(false);
});

test("Validate password - (password > 25)", () => {
  expect(validatePassword("aaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(false);
});
