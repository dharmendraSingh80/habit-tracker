import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import "./styles/index.css";
import App from "./components/App";
//importing root reducer
import rootReducer from "./reducers";

//creating redux store here
const store = createStore(rootReducer);
// console.log("store", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
