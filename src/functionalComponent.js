import { useState, useEffect, useMemo, useCallback } from "react";

const LifeCycles = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    debugger;
    setCount(20);
  }, []);

  useEffect(() => {
    debugger;
    if (count === 32) {
      alert("Hey You have reached 32");
    }
  }, [count]);

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div>
      HI I am functional Component
      {count}
      <button onClick={handleAdd}>increment</button>
    </div>
  );
};

export default LifeCycles;

// API call

// filters[item1, item2]

// useEffect(() => {
//     API CALL(filters)
// }, [filters])

// item1 -> API call (item1)
// item2 -> API call (item1)
// item3 -> setFilters(item3)
// item4 -> API call(item1)

// useMemo
// useCallback
// useRef
