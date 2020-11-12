import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51HmRqfIED8UWHjNrwXOR40ozBJXn7GhELMOYlnbA450d8jJoPar0sM7eYzxrbDKEURD6QEQIOCqYoVO29BhNmKAT00kXifl4k4"
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <Elements stripe={stripePromise}> */}
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
        {/* </Elements> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
