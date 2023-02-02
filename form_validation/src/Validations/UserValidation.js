import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  fname: Yup.string().required("First Name should not be Empty"),
  lname: Yup.string().required("Last Name should not be Empty"),
  age: Yup.number()
    .typeError("age must be a number")
    .required("age is required")
    .min(18, "age must be greater than 18"),
  phone_number: Yup.string().matches(
    /^\d{11}$/,
    "Please enter a valid 11 digit phone number"
  ),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  c_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
