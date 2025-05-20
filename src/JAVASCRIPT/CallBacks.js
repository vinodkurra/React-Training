

// Callbacks are functions that are passed as arguments to other functions.




 
function getData(callBack) {
  const data = "API call it will give response";
  callBack(data);
}

function callBack(data) {}
getData(callBack);

map; //

const array = [1, 2, 3, 4, 5, 6];

const updatedArray = array.map((value, index) => {
  return value + 10;
});

filter; //

const updatedArrayFilter = array.filter((value, index) => {
  return value > 2;
});



PARENT CHILD RELATIONSHIP


PARENT COMPONENT

import "./styles.css";
import User from "./user";
import { useState } from "react";

export default function App() {
  const [childName, setChildName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleOnclick = (res, name, age) => {
    console.log();
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <User handleOnclick={handleOnclick} id={"123445"} />
      <div>{childName} </div>

      <input value={inputValue} onChange={handleInputChange} />
    </div>
  );
}

map((value, index) => {});

// child component -> props  parent data sending to child + functions

// child lo execute chesi -> data aa function lo argument send chestham



CHILD COMPONENT


import "./styles.css";

export default function User({ id, handleOnclick }) {
  const handleAPI = () => {
    const res = " data"; // id
    handleOnclick(res);
  };

  return (
    <div>
      <button onClick={handleAPI}>I am child component Button </button>
    </div>
  );
}
