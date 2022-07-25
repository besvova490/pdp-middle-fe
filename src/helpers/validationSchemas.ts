import * as yup from "yup";

export const emailValidation = yup.string()
  .required("Field is required")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Wrong email format!");

export const passwordValidation = yup.string()
  .required("Field is required")
  .matches(/^(?=.*[A-Z])((?=.*[a-z]))(?=.*\d)(?=.*[\]\[}{,.<>~?_\-`'"+=\(\)!@#\$%\^&\*\\;:|\/])[A-Za-z\d\]\[}{,.<>~?_\-`'"+=\(\)!@#\$%\^&\*\\;:|\/]{8,}$/, "This password must contain 8 characters, one uppercase, one lowercase, one number and one special case character");

export const loginAuthSchema = yup.object({
  email: emailValidation,
  password: yup.string()
    .required("Field is required")
});

export const restorePassword = yup.object({
  password: passwordValidation,
  passwordConfirmation: yup.string()
    .required("Field is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const signUpAuthSchema = yup.object({
  email: emailValidation,
  password: passwordValidation,
  passwordConfirmation: yup.string()
    .required("Field is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});


export const editUserProfileValidation = yup.object({
  email: emailValidation,
  avatar: yup.string().typeError("Wrong avatar format!"),
  thumbnailImage: yup.string().typeError("Wrong Thumbnail Image format!"),
  userName: yup.string().required("Field is required"),
  fullName: yup.string().typeError("Wrong Full Name format!"),
  description: yup.string().max(500, "Max allowed length is 500 chars"),
  phone: yup.string().required("Field is required"),
});

export const createEditPostValidation = yup.object({
  thumbnail: yup.string().required("Field is required").typeError("Wrong Thumbnail Image format!"),
  description: yup.string().required("Field is required").max(500, "Max allowed length is 500 chars"),
});
