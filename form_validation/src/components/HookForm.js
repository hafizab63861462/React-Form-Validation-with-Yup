// import { useState } from "react";
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

  const onSubmit = (data) => {
    console.log(data);
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
              name="fname"
              placeholder="First Name"
              autoFocus={true}
              {...register("fname")}
            />
            {errors.fname && <p> {errors.fname.message}</p>}
          </div>

          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              placeholder="Last name"
              {...register("lname")}
            />
            {errors.lname && <p> {errors.lname.message}</p>}
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
              name="phone_number"
              placeholder="Contact Number"
              {...register("phone_number")}
            />
            {errors.phone_number && <p> {errors.phone_number.message}</p>}
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
              name="c_password"
              placeholder="Cpnfirm Password"
              {...register("c_password")}
            />
            {errors.c_password && <p> {errors.c_password.message}</p>}
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
