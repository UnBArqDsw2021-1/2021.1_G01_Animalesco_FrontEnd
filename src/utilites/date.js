const splitDay = (value) => {
  const [dd, mm, yyyy] = value.split("/");
  const year = parseInt(yyyy);
  const month = Math.min(11, parseInt(mm) - 1);
  const day = parseInt(dd);

  return [year, month, day];
};

export const validateDate = (value) => {
  if (value.length !== 10) {
    return false;
  }
  return true;
};

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

export const formatDateToRequest = (value) => {
  const [year, month, day] = splitDay(value);

  return [year, month, day].join("-");
};
