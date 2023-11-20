export const validateEmail = (email) => {
  if (!email) {
    return "Email is required.";
  }

  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm",
  );

  const isValid = emailRegex.test(email);

  if (!isValid) {
    return "Please enter a valid email address.";
  }
};

export const validatePassword = (password) => {
  if (password === "") {
    return "Please enter a password.";
  }
};
