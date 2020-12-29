import React, { useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = ({ signUpStart }) => {
  // constructor() {
  //   super();

  //   this.state = {
  //     displayName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   };
  // }

  const [signUpCredentials, setSignUpCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = signUpCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return alert("passwords don't match");
    signUpStart({ displayName, email, password, confirmPassword });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpCredentials({ ...signUpCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your e-mail and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default connect(null, { signUpStart })(SignUp);
