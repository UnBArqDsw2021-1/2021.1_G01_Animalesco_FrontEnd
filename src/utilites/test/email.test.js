import { validateEmail } from "@utilites";

//validateEmail
test("Validate email - (valid email)", () => {
  expect(validateEmail("asdsad@asdas.com")).toBe(true);
});

test("Validate email - (invalid email)", () => {
  expect(validateEmail("asdsa")).toBe(false);
});
