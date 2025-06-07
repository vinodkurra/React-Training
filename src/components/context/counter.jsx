import { useCounter } from "./CounterProvider/useCounterContext";
const Counter = () => {
  const { handleDecrement, handleIncrement } = useCounter();
  return (
    <div>
      <button onClick={handleIncrement}>+</button>

      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
