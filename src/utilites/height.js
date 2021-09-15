export const validateHeight = (value) => {
  if (value > 4 || value < 0.05) {
    return false;
  }
  return true;
};
