export const validatePassword = (value) => {
  if (value.length < 5 || value.length > 25) {
    return false
  }
  return true
}