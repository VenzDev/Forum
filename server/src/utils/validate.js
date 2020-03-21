//TODO

export const validatePassword = password => {
  let err = false;
  if (password.trim() === "") err = true;
  return err;
};

export const validateEmail = email => {
  let err = false;
  if (email.trim() === "") err = true;
  return err;
};
