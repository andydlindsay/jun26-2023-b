import useCounter from "../hooks/useCounter";

const Counter = () => {
  const [count, increment, decrement, addSome] = useCounter();

  return (
    <div>
      <h2>Counter Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => addSome(5)}>Add 5</button>
      <button onClick={() => addSome(10)}>Add 10</button>
    </div>
  );
};

export default Counter;
