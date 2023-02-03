import { useForm } from "react-hook-form";
import { userSchema } from "../Validations/UserValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import "./HookForm.css";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: "all",
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Validation Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>First Name</label>
            <input
              name="firstName"
              placeholder="First Name"
              autoFocus={true}
              {...register("firstName")}
            />
            {errors.firstName && <p> {errors.firstName.message}</p>}
          </div>

          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              {...register("lastName")}
            />
            {errors.lastName && <p> {errors.lastName.message}</p>}
          </div>

          <div className="">
            <label>Age </label>
            <input
              type={"number"}
              name="age"
              placeholder="Age"
              {...register("age")}
            />
            {errors.age && <p> {errors.age.message}</p>}
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Contact Number"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && <p> {errors.phoneNumber.message}</p>}
          </div>

          <div className="field">
            <label>Emial</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <p> {errors.email.message}</p>}
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <p> {errors.password.message}</p>}
          </div>

          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassowrd"
              placeholder="Cpnfirm Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && <p> {errors.confirmPassword.message}</p>}
          </div>
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HookForm;
