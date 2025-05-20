import "./App.css";
import Login from "./login";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

function App() {
  const cookies = new Cookies();
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   const token = cookies.get("token");
  //   if (token) {
  //     setToken(token);
  //   }
  // }, []);

  return (
    <div className="App">
      Hi I am React
      <div> {show ? "Logged in" : "Not logged in"}</div>
      {[1, 2, 3, 4]}
      <button onClick={() => setShow(!show)}>click here</button>
    </div>
  );
}

export default App;
