import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup.string().required("Username Required").min(3, "min lenght 3"),
  firstName: yup.string().required().min(3),
  lastName: yup.string().required().min(3),
  password: yup
    .string()
    .min(6, "Minimum Length 6")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*?&|]{6,}$/,
      "Password should include at least one lower case letter, one upper case letter, one digit and special character(!@#$%^&*)"
    ),
  confirmPassword: yup.string().required().min(6),
});

export const defaultState = {
  username: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};
