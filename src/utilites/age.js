export const validateAge = (value) => {
  if (value > 4 || value < 0.05) {
    return false;
  }
  return true;
};

export const age = (value) => {
  var currentDate = new Date();
  var birthdayDate = new Date(value);

  var curreteYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDay();

  var birthdayYear = birthdayDate.getFullYear();
  var birthdayMonth = birthdayDate.getMonth();
  var birthdayDay = birthdayDate.getDay();

  var yearsOld = curreteYear - birthdayYear;

  if (
    currentMonth < birthdayMonth ||
    (currentMonth == birthdayMonth && currentDay < birthdayDay)
  ) {
    yearsOld--;
  }

  return yearsOld < 0 ? 0 : yearsOld;
};
