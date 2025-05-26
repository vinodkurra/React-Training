import { memo } from "react";

const Child = ({ value, handleIncrement }) => {
  console.log("I am CHild");

  return (
    <>
      <h2>{value}</h2>
      <button onClick={handleIncrement}> Increment</button>
    </>
  );
};

export default memo(Child);
