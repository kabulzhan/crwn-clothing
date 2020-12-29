import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  console.log("With-Spinner has been called ");
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
