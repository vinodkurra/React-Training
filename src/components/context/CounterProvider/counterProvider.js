import { createContext, useMemo, useState } from "react";

export const CounterContext = createContext(null);

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const data = useMemo(
    () => ({
      count,
      handleDecrement,
      handleIncrement,
    }),
    [count, handleDecrement, handleIncrement]
  );

  return (
    <CounterContext.Provider value={data}>{children}</CounterContext.Provider>
  );
};
