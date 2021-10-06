import {
  validateDate,
  validatePetBirthDay,
  formatDate,
  formatDateToRequest,
  validateDateAfterOther,
  formatToBrPattern,
} from "@utilites";

//validateDate
test("Validate date - (test === 10)", () => {
  expect(validateDate("2021/08/21")).toBe(true);
});

test("Validate date - (test !== 10)", () => {
  expect(validateDate("20210821")).toBe(false);
});

//validatePetBirthDay
test("Validate pet birth day - (0 < test < 35)", () => {
  expect(validatePetBirthDay("08/05/2005")).toBe(true);
});

test("Validate pet birth day - (test > 35)", () => {
  expect(validatePetBirthDay("08/05/1970")).toBe(false);
});

test("Validate pet birth day - (test < 0)", () => {
  expect(validatePetBirthDay("08/05/3000")).toBe(false);
});

test("Validate pet birth day - (test.length > 10)", () => {
  expect(validatePetBirthDay("08/05/197")).toBe(true);
});

//formatDate
test("Format date - (test === 8)", () => {
  expect(formatDate("08053000")).toBe("08/05/3000");
});

test("Format date - (test < 8)", () => {
  expect(formatDate("080520")).toBe("08/05/20");
});

test("Format date - (test < 5)", () => {
  expect(formatDate("0805")).toBe("08/05");
});

test("Format date - (test < 3)", () => {
  expect(formatDate("08")).toBe("08");
});

test("Format date - (test > 8)", () => {
  expect(formatDate("080530001")).toBe("08/05/3000");
});

test("Format date - (not a Date)", () => {
  expect(formatDate("333330001")).toBe("31/12/3000");
});

test("Format date - (without value)", () => {
  expect(formatDate("")).toBe("");
});

//formatDateToRequest
test("Format date to requert - (normal format Date)", () => {
  expect(formatDateToRequest("08/05/2005")).toBe("2005-05-08");
});

//formatToBrPattern
test("Format br to pattern - (request format Date)", () => {
  expect(formatToBrPattern("2005-05-08")).toBe("08/05/2005");
});

//validateDateAfterOther
test("Validate date after other - (test1 < test2)", () => {
  expect(validateDateAfterOther("08/05/2005", "09/05/2005")).toBe(true);
});

test("Validate date after other - (test1 > test2)", () => {
  expect(validateDateAfterOther("09/05/2005", "08/05/2005")).toBe(false);
});
