import { useRef, useEffect, useState, useMemo } from "react";

const quantity = 12;
const Login = () => {
  const myInputRef = useRef(null);
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     myInputRef.current.innerHTML = "Vinod";
  //   }, []);

  const value = useMemo(() => {
    return quantity * count;
  }, [quantity, count]);

  console.log(quantity * count, value);

  return (
    <div>
      <h2 ref={myInputRef}>Login {value}</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>

      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default Login;
