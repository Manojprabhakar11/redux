import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../feature/CounterSlice";
import { removeCombineState } from "../feature/actions";

function ButtonAction() {
  const count = useSelector((state) => state.counter.value);
  const array = useSelector((state) => state.counter.array);
  const combineArray = useSelector((state) => state.removeSlice);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <div>{count}</div>
      <div>{combineArray}</div>
      <div>{`${array},`}</div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(removeCombineState())}>clear</button>
    </div>
  );
}

export default ButtonAction;
