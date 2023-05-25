interface IErrors {
  [code: string]: string;
}

const errors: IErrors = {
  EMAIL_EXISTS: "The email address is already in use by another account.",
  EMAIL_NOT_FOUND:
    "There is no user record corresponding to this identifier. The user may have been deleted.",
  INVALID_PASSWORD:
    "The password is invalid or the user does not have a password.",
  "WEAK_PASSWORD : Password should be at least 6 characters":
    "Password should be at least 6 characters",
  "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.":
    " Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.",
};

export const authErrorHandler = (errorCode: string) => {
  return errors[errorCode];
};
