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
import Counter from "./components/context/counter";
import ViewCount from "./components/context/viewCount";
import { CountProvider } from "./components/context/CounterProvider/counterProvider";
import GetContextData from "./components/context2/getUsers";
import ShowUsers from "./components/context2/showUsers";
import { GetUsersProvider } from "./components/context2/usersProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountProvider>
      <GetUsersProvider>
        <GetContextData />
        <ShowUsers />
      </GetUsersProvider>
    </CountProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
