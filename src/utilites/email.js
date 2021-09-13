export const validateEmail = (value) => {
  var mailRegex = /^[^@]+@[^@]+$/; 
  return mailRegex.test(value);
}