export const validateUsername = (value) => {
  var usernameRegex = /^[\w.@+-]+$/; 
  return usernameRegex.test(value);
}