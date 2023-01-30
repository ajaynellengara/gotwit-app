import { useState } from "react";

function MyCounter() {
  const [count, setCount] = useState(0);

  const counterIncrement = () => {
    setCount(count + 1);
  };
  const counterDecrement = () => {
    setCount(count - 1);
  };
  const counterReset = () => {
    setCount(count - count);
  };
  return (
    <>
      <button onClick={counterIncrement}>add 1</button>
      <button onClick={counterDecrement}>add 1</button>
      <button onClick={counterReset}>Reset</button>
      <h1>counter : {count}</h1>

      <button onClick={counterReset}>show/hide</button>
    </>
  );
}

export default MyCounter;
