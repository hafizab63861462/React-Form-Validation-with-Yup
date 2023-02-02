import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  fname: Yup.string()
    .required("First Name should not be Empty")
    .matches(/^[a-zA-Z]+$/, "First Name must be a valid string"),
  lname: Yup.string()
    .required("Last Name should not be Empty")
    .matches(/^[a-zA-Z]+$/, "Last Name must be a valid string"),
  age: Yup.string()
    .typeError("age must be a number")
    .required("age is required")
    .matches(
      /^(1[8-9]|[2-9][0-9]|1[0-5][0-1])$/,
      "age must be greater than 18 and less than 151"
    ),
  phone_number: Yup.string().matches(
    /^\d{11}$/,
    "Please enter a valid 11 digit phone number"
  ),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
      "Password should have min length of 8. Should have both alphanumeric, should have at least one upper case and one the lower case"
    ),
  c_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
