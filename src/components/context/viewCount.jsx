import { useCounter } from "./CounterProvider/useCounterContext";

const ViewCount = () => {
  const { count } = useCounter();
  return <div>Hi This the count {count}</div>;
};

export default ViewCount;
