import { formatAge } from "@utilites";

//Mock
const currentDate = new Date();
const mockCurrentYear = currentDate.getFullYear() + 1;
const mockCurrentMonth = (currentDate.getMonth() + 1)
  .toString()
  .padStart(2, "0");
const mockCurrentDay = (currentDate.getDate() + 1).toString().padStart(2, "0");

//formatAge
test("Format age - (valid date)", () => {
  expect(formatAge("2009-08-05")).toBe(12);
});

test("Format age - (invalid date)", () => {
  expect(formatAge("3000-08-05")).toBe(0);
});

test("Format age - (month case)", () => {
  const dateToFormat = `${mockCurrentYear}-${mockCurrentMonth}-${mockCurrentDay}`;
  expect(formatAge(dateToFormat)).toBe(0);
});

test("Format age - (day case)", () => {
  const dateToFormat = `${mockCurrentYear}-${mockCurrentMonth}-${mockCurrentDay}`;
  expect(formatAge(dateToFormat)).toBe(0);
});
