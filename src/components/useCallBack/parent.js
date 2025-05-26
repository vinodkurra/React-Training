import { useState, useMemo, useCallback } from "react";
import Child from "./child";

const quantity = 12;
const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //   const value = useMemo(() => {
  //     return quantity * count;
  //   }, [quantity, count]);

  const value = quantity * count;

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <Child value={value} handleIncrement={handleIncrement} />
      <input type="text" onChange={handleChange} value={name} />
    </div>
  );
};

export default Parent;
