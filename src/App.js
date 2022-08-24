import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, addByValue } from "./counterSlice";

export default function () {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count {value} </h1>
      <input name="count" onChange={(e) => setCount(e.target.value)} />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addByValue(count))}>Add By value</button>
    </>
  );
}
