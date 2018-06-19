const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateLoginInput = data => {
  let errors = {};

  //If not empty it will be whatever data.email or data.password is
  //If it is empty then it will be an empty string and get tested below
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
