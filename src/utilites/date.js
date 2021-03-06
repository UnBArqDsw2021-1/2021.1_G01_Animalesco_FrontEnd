const splitDay = (value) => {
  const [dd, mm, yyyy] = value.split("/");
  const year = parseInt(yyyy);
  const month = Math.min(11, parseInt(mm) - 1);
  const day = parseInt(dd);

  return [year, month, day];
};

//Recebe DD/MM/YYYY
export const validateDate = (value) => {
  if (value.length !== 10) {
    return false;
  }
  return true;
};

//Recebe DD/MM/YYYY
export const validatePetBirthDay = (value) => {
  if (value.length === 10) {
    const currentDay = new Date();
    const limitDay = new Date();
    limitDay.setFullYear(limitDay.getFullYear() - 35);

    const [year, month, day] = splitDay(value);
    const petBirthday = new Date(year, month, day);

    if (limitDay > petBirthday || currentDay < petBirthday) {
      return false;
    }
  }

  return true;
};

//Recebe before = DD/MM/YYYY e after = DD/MM/YYYY
export const validateDateAfterOther = (before, after) => {
  const [yearBefore, monthBefore, dayBefore] = splitDay(before);
  const [yearAfter, monthAfter, dayAfter] = splitDay(after);

  const dateBefore = new Date(yearBefore, monthBefore, dayBefore);
  const dateAfter = new Date(yearAfter, monthAfter, dayAfter);

  if (dateBefore > dateAfter) {
    return false;
  }

  return true;
};

//Recebe DDMMYYYY
export const formatDate = (value) => {
  const src = (value || "").replace(/[^\d/]/g, "");
  const srcLength = src.length;
  const numbers = src.replace(/[^\d]/g, "");
  const out = [];

  for (let i = 0; i < numbers.length && i < 8; i++) {
    out.push(numbers[i]);
    switch (i) {
      case 1:
        if (srcLength > 2) {
          out.push("/");
        }
        break;
      case 3:
        if (srcLength > 5) {
          out.push("/");
        }
        break;
    }
  }

  const outString = out.join("");

  if (outString.length === 10) {
    const [year, month, day] = splitDay(outString);
    let date = new Date(year, month, day);
    if (date.getDate() !== day) {
      date = new Date(year, month + 1, 0);
    }
    const dateStr = [
      date.getDate().toString().padStart(2, "0"),
      (date.getMonth() + 1).toString().padStart(2, "0"),
      date.getFullYear().toString(),
    ].join("/");

    return dateStr;
  }

  return outString;
};

//Recebe DD/MM/YYYY
export const formatDateToRequest = (value) => {
  const [yyyy, mm, dd] = splitDay(value);

  const month = parseInt(mm) + 1;
  const day = parseInt(dd);

  return [
    yyyy,
    month.toString().padStart(2, "0"),
    day.toString().padStart(2, "0"),
  ].join("-");
};

//Recebe YYYY-MM-DD
export const formatToBrPattern = (value) => {
  const [year, month, day] = value.split("-");

  const dateStr = [day, month, year].join("/");

  return dateStr;
};
