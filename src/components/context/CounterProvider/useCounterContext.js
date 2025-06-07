import { useContext } from "react";

import { CounterContext } from "./counterProvider";

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used with in a counter provider");
  }

  return context;
};
