import React, { useState } from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label="email"
          value={userCredentials.email}
          name="email"
          required
          type="email"
        />
        <FormInput
          handleChange={handleChange}
          label="password"
          value={userCredentials.password}
          name="password"
          required
          type="password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            onClick={() => {
              dispatch(googleSignInStart());
            }}
            isGoogleSignIn
            type="button"
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
