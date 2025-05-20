const Counter = ({ counter, handleAdd, handleRemove }) => {
  const handleAdd5 = (e) => {
    handleAdd(e, 5);
  };
  return (
    <div>
      <button onClick={handleAdd}> Add + </button>
      <button onClick={handleAdd5}> Add +5 </button>
      <div>{counter} </div>
      <button onClick={handleRemove}> remove - </button>
    </div>
  );
};

export default Counter;
