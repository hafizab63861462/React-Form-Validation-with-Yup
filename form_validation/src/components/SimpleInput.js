import useInput from "../hooks/use-input";

const isEmpty = (value) => {
  return value.trim() !== "";
};

const isValidEmail = (email) => {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  return reg.test(String(email).toLowerCase());
};

const isValidAge = (age) => {
  age.trim();

  return age >= 18 && age < 151 ? true : false;
};

const isValidContactNumber = (number) => {
  number.trim();
  return number.match(/^\d{11}/) ? true : false;
};

const SimpleInput = (props) => {
  const {
    value: firstName,
    isValid: fistNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isEmpty);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isValidEmail);

  const {
    value: age,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(isValidAge);

  const {
    value: contactNumber,
    isValid: contactNumberIsValid,
    hasError: contactNumberHasError,
    valueChangeHandler: contactNumberChangeHandler,
    inputBlurHandler: contactNumberBlurHandler,
    reset: resetcontactNumber,
  } = useInput(isValidContactNumber);

  let formIsValid = false;

  if (
    fistNameIsValid &&
    lastNameIsValid &&
    ageIsValid &&
    emailIsValid &&
    contactNumberIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !fistNameIsValid &&
      !lastNameIsValid &&
      ageIsValid &&
      !emailIsValid &&
      contactNumberIsValid
    ) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetAge();
    resetcontactNumber();
    resetEmail();
  };

  const firstnameClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClass = emailHasError ? "form-control invalid" : "form-control";

  const ageClass = ageHasError ? "form-control invalid" : "form-control";

  const contactNumberClass = contactNumberHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={firstnameClass}>
        <label htmlFor="f-name">First Name</label>
        <input
          type="text"
          id="f-name"
          onChange={firstNameChangedHandler}
          onBlur={firstNameBlurHandler}
          value={firstName}
        />
        {firstNameHasError && (
          <p className="error-text">First Name must not be empty.</p>
        )}
      </div>
      <div className={lastNameClass}>
        <label htmlFor="l-name">Last Name</label>
        <input
          type="text"
          id="l-name"
          onChange={lastNameChangedHandler}
          onBlur={lastNameBlurHandler}
          value={lastName}
        />
        {lastNameHasError && (
          <p className="error-text">Last Name must not be empty.</p>
        )}
      </div>

      <div className={ageClass}>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          onBlur={ageBlurHandler}
          value={age}
        />
        {ageHasError && (
          <p className="error-text">Age must be Between 18 to 151</p>
        )}
      </div>

      <div className={contactNumberClass}>
        <label htmlFor="contact-number">Contact Number</label>
        <input
          type="number"
          id="contact-number"
          onChange={contactNumberChangeHandler}
          onBlur={contactNumberBlurHandler}
          value={contactNumber}
        />
        {contactNumberHasError && (
          <p className="error-text">Please enter a valid Contact Number.</p>
        )}
      </div>

      <div className={emailClass}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
