export const validatePassword = (value) => {
  if (value.length < 8 || value.length > 25) {
    return false;
  }
  return true;
};
