import { validateUsername } from "@utilites";

//validateUsername
test("Validate username - (valid username)", () => {
  expect(validateUsername("aaaaaaa12312")).toBe(true);
});

test("Validate username - (with special character)", () => {
  expect(validateUsername("*@#!")).toBe(false);
});
