import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          {/* <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>e-mail</label> */}
          <FormInput
            handleChange={this.handleChange}
            label="email"
            value={this.state.email}
            name="email"
            required
            type="email"
          />
          <FormInput
            handleChange={this.handleChange}
            label="password"
            value={this.state.password}
            name="password"
            required
            type="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
          {/* <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          /> */}
          {/* <label>password</label> */}
          {/* <input type="submit" value="Submit Form" /> */}
        </form>
      </div>
    );
  }
}

export default SignIn;
