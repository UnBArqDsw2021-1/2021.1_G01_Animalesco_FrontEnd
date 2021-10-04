const splitDate = (value) => {
  const [yyyy, mm, dd] = value.split("-");
  const year = parseInt(yyyy);
  const month = parseInt(mm);
  const day = parseInt(dd);

  return [year, month, day];
};

export const formatAge = (value) => {
  const [yyyy, mm, dd] = splitDate(value);

  var currentDate = new Date();
  var birthdayDate = new Date(yyyy, mm, dd);

  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDate();

  var birthdayYear = birthdayDate.getFullYear();
  var birthdayMonth = birthdayDate.getMonth();
  var birthdayDay = birthdayDate.getDate();

  var yearsOld = currentYear - birthdayYear;

  if (
    currentMonth < birthdayMonth ||
    (currentMonth === birthdayMonth && currentDay < birthdayDay)
  ) {
    yearsOld--;
  }

  return yearsOld < 0 ? 0 : yearsOld;
};
