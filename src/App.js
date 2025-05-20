import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);
  const [userList, handleUserList] = useState([]);

  const handleAdd = (e, value = 1) => {
    debugger;
    setCounter(counter + value); // value  || callback
  };

  const handleRemove = () => {
    setCounter(counter - 1);
  };

  
  return (
    <div className="App">
      <Counter
        counter={counter}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        data={{ name: "Vinod" }}
      />
    </div>
  );
}

export default App;
