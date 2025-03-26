function isValidPassword(password, username) {
  //check if password is 8 charactes
  if (password.length < 8) {
    return false;
  }

  // Check if password contains spaces
  if (password.includes(" ")) {
    return false;
  }

  // Password cannot be the username
  if (password.includes(username)) {
    return false;
  }

  // If everything is fine, return true
  return true;
}
