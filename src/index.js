import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LifeCycleCounter from "./ClassBasedComponent";
import LifeCycles from "./functionalComponent";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import Login from "./components/Login";
// import Parent from "./components/useCallBack/parent";
import Parent from "./components/prop-types/parent";
import CustomHooks from "./components/CustomHooks";
import UserInput from "./components/userInput";
import GetUserData from "./components/fetchData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GetUserData />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
